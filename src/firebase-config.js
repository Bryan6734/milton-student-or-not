// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZB1iWMu3R1r3xBMx7hLg-OLObZ3fFSTs",
  authDomain: "react-chat-app-demo-f8687.firebaseapp.com",
  projectId: "react-chat-app-demo-f8687",
  storageBucket: "react-chat-app-demo-f8687.appspot.com",
  messagingSenderId: "778719176795",
  appId: "1:778719176795:web:2fe1fd8408afed2db9777e",
  measurementId: "G-JKJL375N8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();