// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Tvoja Firebase konfiguracija
const firebaseConfig = {
  apiKey: "AIzaSyAN1-ETDEGlql0pEJBJqvdDtYpnVAeXpqs",
  authDomain: "rirs-ac280.firebaseapp.com",
  projectId: "rirs-ac280",
  storageBucket: "rirs-ac280.appspot.com",
  messagingSenderId: "619808482976",
  appId: "1:619808482976:web:c331c9cef2e9bb69200bc5"
};

// Inicializacija Firebase
const app = initializeApp(firebaseConfig);

// Inicializacija Firebase storitev
export const auth = getAuth(app);
export const db = getFirestore(app);

// Funkcija za pridobitev vloge uporabnika iz Firestore
export const getUserRole = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.exists() ? userDoc.data().role : null;
};

export default app;
