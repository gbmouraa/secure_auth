import { createContext, useState } from "react";
import { db, auth, storage } from "./services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

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

    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(async (value) => {
        const userCredentials = value.user;
        const docRef = collection(db, "users");

        await addDoc(docRef, {
          userID: userCredentials.uid,
          name: userData.firstName,
          email: userCredentials.email,
        });

        let data = {
          userID: userCredentials.uid,
          name: userData.name,
          email: userCredentials.email,
        };

        setUser(data);
        setIsSigned(true);
      })
      .catch((error) => {
        console.log(error + error.code);
      })
      .finally(() => setLoading(false));
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
