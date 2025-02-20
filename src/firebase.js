// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA7WIGpHwImaC9yTDCxuMnSbke1UeY-j_8",
  authDomain: "proyecto-x-f20fa.firebaseapp.com",
  projectId: "proyecto-x-f20fa",
  storageBucket: "proyecto-x-f20fa.firebasestorage.app",
  messagingSenderId: "886083419408",
  appId: "1:886083419408:web:2d678b33fbf8fbd1887995",
  measurementId: "G-9LZR799SL1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
