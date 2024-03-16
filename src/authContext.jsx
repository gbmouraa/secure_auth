import { createContext, useState, useEffect } from "react";
import { db, auth, storage } from "./services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatarSelected, setAvatarSelected] = useState("");
  // foto de perfil que é enviada ao firebase
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    function checkUserStorage() {
      const userStorage = localStorage.getItem("_secureAuth");
      if (userStorage && userStorage !== null) setUser(JSON.parse(userStorage));
      setLoading(false);
    }

    checkUserStorage();
  }, []);

  async function signUp(userData) {
    setLoading(true);

    // flag para definir se será necessário fazer o upload de uma imagem para o firebase
    let sendImage = false;
    let avatar = "";

    if (avatarSelected && avatarSelected !== "profileImage") {
      avatar = avatarSelected.imageLink;
    } else if (avatarSelected === "profileImage") {
      sendImage = true;
    }

    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(async (value) => {
        const userCredentials = value.user;
        const docRef = doc(db, "users", userCredentials.uid);

        if (sendImage) {
          await uploadFile(userCredentials.uid).then((dowloadURL) => {
            avatar = dowloadURL;
          });
        }

        await setDoc(docRef, {
          userID: userCredentials.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userCredentials.email,
          avatarURL: avatar,
        });

        let data = {
          userID: userCredentials.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userCredentials.email,
          avatarURL: avatar,
        };

        userStorage(data);
        setAvatarSelected("");

        // setTimeout apenas para fins de efeitos visuais -- visualizar o modal :)
        setTimeout(() => {
          setLoading(false);
          setUser(data);
          navigate("/profile");
        }, 5000);
      })
      .catch((error) => {
        console.log(error + error.code);
        setLoading(false);
      });
  }

  async function signIn(email, password) {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (snapshot) => {
        const uid = snapshot.user.uid;
        const docRef = doc(db, "users", uid);

        await getDoc(docRef).then((docSnap) => {
          const userData = docSnap.data();

          const data = {
            userID: uid,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            avatarURL: userData.avatarURL,
          };

          userStorage(data);

          setTimeout(() => {
            setLoading(false);
            setUser(data);
            navigate("/profile");
          }, 5000);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error + error.code);
      });
  }

  function userStorage(user) {
    localStorage.setItem("_secureAuth", JSON.stringify(user));
  }

  // envia e retorna o link da imagem de usuário no firebase
  async function uploadFile(userID) {
    const uploadRef = ref(storage, `image/${userID}/${imageFile.name}`);

    // ** refatorar
    return uploadBytes(uploadRef, imageFile)
      .then(async (value) => {
        return getDownloadURL(value.ref).then((dowloadURL) => {
          return String(dowloadURL);
        });
      })
      .catch((error) => {
        console.log(error + error.code);
      });
  }

  async function logOut() {
    setLoading(true);

    await signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("_secureAuth");
        navigate("/login");
      })
      .catch((error) => console.log(error + error))
      .finally(() => setLoading(false));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSigned: !!user,
        signUp,
        avatarSelected,
        setAvatarSelected,
        imageFile,
        setImageFile,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
