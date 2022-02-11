// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWsOADhh60w9_3NqryZpb5b835FVOdPuE",
    authDomain: "express24-9200c.firebaseapp.com",
    projectId: "express24-9200c",
    storageBucket: "express24-9200c.appspot.com",
    messagingSenderId: "575427393830",
    appId: "1:575427393830:web:e0b6dfe67f0572d98029e7",
    measurementId: "G-D0TK2TM4YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

