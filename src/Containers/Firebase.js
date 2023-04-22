import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7gz99dEye7LZrIUp0P5lRg_9EDV9_QAs",
  authDomain: "swarnalatex-9698e.firebaseapp.com",
  projectId: "swarnalatex-9698e",
  storageBucket: "swarnalatex-9698e.appspot.com",
  messagingSenderId: "400212142592",
  appId: "1:400212142592:web:87983248b7dedf179b46e5",
  measurementId: "G-ZLMCR4ZT7P"
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
