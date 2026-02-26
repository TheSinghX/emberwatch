import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA44C48L05RzLEf305RJjzG5FW3xV9YKvs",
  authDomain: "emberwatch-3b03a.firebaseapp.com",
  projectId: "emberwatch-3b03a",
  storageBucket: "emberwatch-3b03a.firebasestorage.app",
  messagingSenderId: "368097089304",
  appId: "1:368097089304:web:e54db8d3708a774093b06d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);