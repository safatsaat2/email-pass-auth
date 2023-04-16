// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTG0DUVQrJ1i1oOuahwclkWOSbXtnVhPg",
  authDomain: "email-pass-auth-96d50.firebaseapp.com",
  projectId: "email-pass-auth-96d50",
  storageBucket: "email-pass-auth-96d50.appspot.com",
  messagingSenderId: "285434125702",
  appId: "1:285434125702:web:a78d8946642a22fc71e007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app