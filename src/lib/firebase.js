import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d1c1c.firebaseapp.com",
  projectId: "reactchat-d1c1c",
  storageBucket: "reactchat-d1c1c.appspot.com",
  messagingSenderId: "11990345020",
  appId: "1:11990345020:web:f7aedc60bc9387615b6a39",
  measurementId: "G-9WRT75GND2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
