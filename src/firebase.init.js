// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz3fBoAc3PJIrClFtrYLWRVPHi7O9wkI4",
  authDomain: "router-firebase-integrat-db34d.firebaseapp.com",
  projectId: "router-firebase-integrat-db34d",
  storageBucket: "router-firebase-integrat-db34d.appspot.com",
  messagingSenderId: "527689555426",
  appId: "1:527689555426:web:d849054dd38b471a8f6dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;