// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDW93UgXc8nAOYTYbvG3yP1Wl_B_FU9L8",
  authDomain: "flashcards-saas-7dd61.firebaseapp.com",
  projectId: "flashcards-saas-7dd61",
  storageBucket: "flashcards-saas-7dd61.appspot.com",
  messagingSenderId: "739944141936",
  appId: "1:739944141936:web:4efd8c9f829f1872a110b5",
  measurementId: "G-VK3V0FEML8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}