import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCllmv0AflQYncS70nsdOdosZOxXElKQ7c",
  authDomain: "auth-7e2b3.firebaseapp.com",
  projectId: "auth-7e2b3",
  storageBucket: "auth-7e2b3.appspot.com",
  messagingSenderId: "596302532495",
  appId: "1:596302532495:web:5f8b3d47b37039187ec5fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
