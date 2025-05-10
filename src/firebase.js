// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bc-blog-ef0db.firebaseapp.com",
  projectId: "bc-blog-ef0db",
  storageBucket: "bc-blog-ef0db.firebasestorage.app",
  messagingSenderId: "469112548704",
  appId: "1:469112548704:web:8ea5196cadace3093b8205",
  measurementId: "G-YBJ06JL1XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);


export { app, analytics, storage };