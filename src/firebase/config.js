import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "proyectofinal-juanfram.firebaseapp.com",
    projectId: "proyectofinal-juanfram",
    storageBucket: "proyectofinal-juanfram.firebasestorage.app",
    messagingSenderId: "368432338093",
    appId: "1:368432338093:web:b3d230d107a9fd41922224",
    measurementId: "G-Q0VZ19FNX6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);