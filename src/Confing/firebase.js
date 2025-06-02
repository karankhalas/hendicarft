// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvKdBuWT8LIWTM8NtlfpqSiANNWrwkTKo",
  authDomain: "hendicraft-f71eb.firebaseapp.com",
  projectId: "hendicraft-f71eb",
  storageBucket: "hendicraft-f71eb.firebasestorage.app",
  messagingSenderId: "515705966658",
  appId: "1:515705966658:web:5fb800f104a3ac1e2d9ddb",
  measurementId: "G-RWFZDMH43Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);