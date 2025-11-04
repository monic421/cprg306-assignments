// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChP8JNH84jrPoudB0oJA86pOhazsqZ6F0",
    authDomain: "cprg306-assignments-5935a.firebaseapp.com",
    projectId: "cprg306-assignments-5935a",
    storageBucket: "cprg306-assignments-5935a.firebasestorage.app",
    messagingSenderId: "821825170173",
    appId: "1:821825170173:web:6a958c4ead292a8d7b2c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;