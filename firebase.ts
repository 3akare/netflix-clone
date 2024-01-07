// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_iiSBNYziipg-0oy-qSqwfxMCCP5UZfc",
  authDomain: "netflix-clone-b989a.firebaseapp.com",
  projectId: "netflix-clone-b989a",
  storageBucket: "netflix-clone-b989a.appspot.com",
  messagingSenderId: "462321725935",
  appId: "1:462321725935:web:b049c7a564dee88b34061a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
