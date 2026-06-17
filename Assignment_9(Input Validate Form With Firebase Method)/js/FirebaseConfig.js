// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxqpdiSsExGvwx2D5w4mXYDpZzuQPKGzk",
    authDomain: "usercreationusingemail.firebaseapp.com",
    projectId: "usercreationusingemail",
    storageBucket: "usercreationusingemail.firebasestorage.app",
    messagingSenderId: "801738734437",
    appId: "1:801738734437:web:75912426b4be80b2327f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword }