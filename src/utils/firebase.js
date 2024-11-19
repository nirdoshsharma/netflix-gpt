// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl_qkuPxGiC-5Yn_v-1szmcdyAFHp2o1Q",
  authDomain: "netflixgpt-a9733.firebaseapp.com",
  projectId: "netflixgpt-a9733",
  storageBucket: "netflixgpt-a9733.firebasestorage.app",
  messagingSenderId: "582922810746",
  appId: "1:582922810746:web:9bc9444fda3ae7af5b92c3",
  measurementId: "G-YG2KE8CYLJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
