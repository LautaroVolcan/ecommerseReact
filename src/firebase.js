// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKfKii6-nW-cYTN7QwGp5OgSxM26tWhAA",
  authDomain: "sox-ecommerse.firebaseapp.com",
  projectId: "sox-ecommerse",
  storageBucket: "sox-ecommerse.appspot.com",
  messagingSenderId: "279456757700",
  appId: "1:279456757700:web:1ed33c50ad69a015509691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db