import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiA2BrvVuZbt_GJo86wL9kXmg1Jze7Gr8",
  authDomain: "bharathgo-1e621.firebaseapp.com",
  projectId: "bharathgo-1e621",
  storageBucket: "bharathgo-1e621.appspot.com",
  messagingSenderId: "5545826817",
  appId: "1:5545826817:web:db96f7ef122e4fbb003e00",
  measurementId: "G-W2D41BHMQR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
