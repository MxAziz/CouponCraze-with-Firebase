// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSwigrL5hEXtFi-lVYdZTFbnSEGRDcIPQ",
  authDomain: "discount-pro-ec7f0.firebaseapp.com",
  projectId: "discount-pro-ec7f0",
  storageBucket: "discount-pro-ec7f0.firebasestorage.app",
  messagingSenderId: "666584923384",
  appId: "1:666584923384:web:5c4aacdb00d773fb970f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;