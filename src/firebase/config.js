// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSh0QESY1LZBys6SHDaWYkwn5NIQfKW4",
  authDomain: "fit-market-a2c1d.firebaseapp.com",
  projectId: "fit-market-a2c1d",
  storageBucket: "fit-market-a2c1d.appspot.com",
  messagingSenderId: "36912918596",
  appId: "1:36912918596:web:1817926c665a2fd1358c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);