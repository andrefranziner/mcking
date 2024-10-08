import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyYo61tpo_eURB0vnA_5Zb-kRbwI9n_Ug",
    authDomain: "mckingpi.firebaseapp.com",
    projectId: "mckingpi",
    storageBucket: "mckingpi.appspot.com",
    messagingSenderId: "892049633832",
    appId: "1:892049633832:web:f818b1429c15a1fddfbb1d"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;