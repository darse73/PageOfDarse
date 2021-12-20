import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// Set the configuration for your app
// TODO: Replace the following with your app's Firebase project configuration
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
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
console.log(storage)
export const db = getFirestore()
console.log(db)