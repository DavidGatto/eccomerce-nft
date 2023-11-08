import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
