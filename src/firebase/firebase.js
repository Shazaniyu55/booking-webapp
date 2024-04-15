// Import the functions you need from the SDKs you need
import {initializeApp }from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb9b3gBLhpvR-ubrFFReJQZNlBShXhWcw",
  authDomain: "bookingwebapp-3c108.firebaseapp.com",
  projectId: "bookingwebapp-3c108",
  storageBucket: "bookingwebapp-3c108.appspot.com",
  messagingSenderId: "150201070985",
  appId: "1:150201070985:web:b3e572874f6edbe3721d58",
  measurementId: "G-KRN9J531Y0"
};

// Initialize Firebase

export const firebase = initializeApp(firebaseConfig)
export const db = getFirestore(firebase) 
export  const auth = getAuth(firebase)
export const storage = getStorage(firebase)