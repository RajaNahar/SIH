import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup, 
  GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOyZxxSdUcYz3yLqLFHt9q3xkqP9kQ4lM",
  authDomain: "sih-green-65dcb.firebaseapp.com",
  projectId: "sih-green-65dcb",
  storageBucket: "sih-green-65dcb.appspot.com",
  messagingSenderId: "714519857907",
  appId: "1:714519857907:web:8b83c7afc6d2a6e0d24586",
  measurementId: "G-V5F1CXW9E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export  {auth, getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup, 
  GoogleAuthProvider
}
