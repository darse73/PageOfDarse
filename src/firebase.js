// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";  //fairebaseの初期化
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBI-CoGeYXJMlCEiMWOjBLQmTzj7n7-Tvo",
    authDomain: "pageofdarse.firebaseapp.com",
    projectId: "pageofdarse",
    storageBucket: "pageofdarse.appspot.com",
    messagingSenderId: "360556229496",
    appId: "1:360556229496:web:9d95860a69fc7c5ae3ce8d",
    measurementId: "G-NS2WCBJD5L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore();
// export const storage = firebase.storage()