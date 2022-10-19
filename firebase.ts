// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg1JiwAvVTCdaxRv8o233EjDSVaP2QoRI",
  authDomain: "tiktik-46b6d.firebaseapp.com",
  projectId: "tiktik-46b6d",
  storageBucket: "tiktik-46b6d.appspot.com",
  messagingSenderId: "646075351781",
  appId: "1:646075351781:web:1fe048e23c6bba2fcd8a0c",
  measurementId: "G-FSTBLHP8LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app