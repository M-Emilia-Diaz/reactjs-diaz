
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL0xEuiCcUMRzqFTY-OJoeHvogcb-aAIw",
  authDomain: "productos-app-a3c82.firebaseapp.com",
  projectId: "productos-app-a3c82",
  storageBucket: "productos-app-a3c82.appspot.com",
  messagingSenderId: "849232343280",
  appId: "1:849232343280:web:509cbe4a9ffbed80001235"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)