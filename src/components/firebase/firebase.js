import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyComUr2knl9Dru-tTazicCcdSLgXiQv1n8",
  authDomain: "mi-primer-react---coderhouse.firebaseapp.com",
  projectId: "mi-primer-react---coderhouse",
  storageBucket: "mi-primer-react---coderhouse.appspot.com",
  messagingSenderId: "255219710200",
  appId: "1:255219710200:web:f36542b2e8510a95fda30d",
  measurementId: "G-SH7KWX4Z38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);

export default db;