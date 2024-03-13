import { createContext, useState } from "react";
import { db, auth, storage } from "./services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { string } from "zod";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatarSelected, setAvatarSelected] = useState("");
  // foto de perfil que é enviada ao firebase
  const [imageFile, setImageFile] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUp(userData) {
    setLoading(true);

    // flag para definir se será necessário fazer o upload de uma imagem par o firebase
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
        const docRef = collection(db, "users");

        if (sendImage) {
          await uploadFile(userCredentials.uid).then((dowloadURL) => {
            avatar = dowloadURL;
          });
        }

        await addDoc(docRef, {
          userID: userCredentials.uid,
          name: userData.firstName,
          email: userCredentials.email,
          avatarURL: avatar,
        });

        let data = {
          userID: userCredentials.uid,
          name: userData.name,
          email: userCredentials.email,
          avatarURL: avatar,
        };

        setUser(data);
        setIsSigned(true);
        console.log("success");
      })
      .catch((error) => {
        console.log(error + error.code);
      })
      .finally(() => setLoading(false));
  }

  // envia e retorna o link da imagem de usuário no firebas
  async function uploadFile(userID) {
    const uploadRef = ref(storage, `image/${userID}/${imageFile.name}`);

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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSigned,
        signUp,
        avatarSelected,
        setAvatarSelected,
        imageFile,
        setImageFile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
