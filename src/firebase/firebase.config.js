// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_DpLKxR01KPnI70Dk0S2OdOcsn47afSU",
  authDomain: "red-tomato-fcf28.firebaseapp.com",
  projectId: "red-tomato-fcf28",
  storageBucket: "red-tomato-fcf28.appspot.com",
  messagingSenderId: "897326066818",
  appId: "1:897326066818:web:408b5ee40b3bed9587d89b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
