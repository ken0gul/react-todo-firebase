// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Import firestore so that you can use your firestore database
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWuYM2nd0C2BPqP1Kgq4KSKJVt0g6Ql6M",
  authDomain: "todo-912cd.firebaseapp.com",
  projectId: "todo-912cd",
  storageBucket: "todo-912cd.appspot.com",
  messagingSenderId: "51069977903",
  appId: "1:51069977903:web:94b09634eca955ee1f8dda",
  measurementId: "G-DNJX8CTDQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// In order to use your db export a db setting its value to getFirestore(app)
export const db = getFirestore(app);
