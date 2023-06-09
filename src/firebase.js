import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmB8tZeHRaiBpeJp4-zQ0yElJgX7JuT7I",
  authDomain: "naveen-portfolio-react.firebaseapp.com",
  projectId: "naveen-portfolio-react",
  storageBucket: "naveen-portfolio-react.appspot.com",
  messagingSenderId: "694658847575",
  appId: "1:694658847575:web:a521b1d78c027bb9676412"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();





