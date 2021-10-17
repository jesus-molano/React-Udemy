import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAHw5cNXmJtePt2XLcrSdvTzABDkzXI7cM",
  authDomain: "react-journal-app-3ca47.firebaseapp.com",
  projectId: "react-journal-app-3ca47",
  storageBucket: "react-journal-app-3ca47.appspot.com",
  messagingSenderId: "1072996954035",
  appId: "1:1072996954035:web:3931ed7c02067025d825c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {db, googleAuthProvider}