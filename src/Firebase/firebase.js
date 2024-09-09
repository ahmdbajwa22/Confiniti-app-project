import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQS0L81BYZA84lJKF4QlncBjGkK1ro-uE",
  authDomain: "p2pclouds-crm.firebaseapp.com",
  databaseURL: "https://p2pclouds-crm-default-rtdb.firebaseio.com",
  projectId: "p2pclouds-crm",
  storageBucket: "p2pclouds-crm.appspot.com",
  messagingSenderId: "920690160890",
  appId: "1:920690160890:web:e992ade68d3bdc355c4543",
  measurementId: "G-HZZ92DN7X2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
