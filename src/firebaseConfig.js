import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzlQruZKJojbbFZEo_xRAj0VplQ2VCUIE",
  authDomain: "ecommerce-nft.firebaseapp.com",
  projectId: "ecommerce-nft",
  storageBucket: "ecommerce-nft.appspot.com",
  messagingSenderId: "115559492043",
  appId: "1:115559492043:web:2196fb7705a243246e6e4e",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);

export const auth = getAuth(appFirebase);
