// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEjXZYTkmMP75y4lxjJqQyf2QxQhr0gI",
  authDomain: "ema-john-with-firebase-a-ccff3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-ccff3",
  storageBucket: "ema-john-with-firebase-a-ccff3.appspot.com",
  messagingSenderId: "969137169546",
  appId: "1:969137169546:web:ab37e11215bc9f78a3b973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;