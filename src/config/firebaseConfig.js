import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDbdb2s3-C16x_JnoGM4lcckFCW92QZymQ",
  authDomain: "netflix-clone-23c3b.firebaseapp.com",
  projectId: "netflix-clone-23c3b",
  storageBucket: "netflix-clone-23c3b.appspot.com",
  messagingSenderId: "261449263937",
  appId: "1:261449263937:web:ddfa3f8ebcca915da84fc0",
  measurementId: "G-4H88BL60QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);