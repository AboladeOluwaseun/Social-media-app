// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQgZ7u9DU0T-rIfI0BYEY_mJGs7os2AJs",
  authDomain: "social-media-app-89f48.firebaseapp.com",
  projectId: "social-media-app-89f48",
  storageBucket: "social-media-app-89f48.appspot.com",
  messagingSenderId: "102265251114",
  appId: "1:102265251114:web:8f67438d868543cf4aea53",
  measurementId: "G-V40X580BXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()