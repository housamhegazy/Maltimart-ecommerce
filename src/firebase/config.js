// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpan8KDSqLeNwVNvSa-v-9jx4mpT2hJk0",
  authDomain: "react-bootstrape-ecommerceapp.firebaseapp.com",
  projectId: "react-bootstrape-ecommerceapp",
  storageBucket: "react-bootstrape-ecommerceapp.appspot.com",
  messagingSenderId: "95529405017",
  appId: "1:95529405017:web:a3be77f97add11a9c57f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
