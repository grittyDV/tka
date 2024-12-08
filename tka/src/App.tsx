import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fh241WANsA2Fq7V16Y2Lc9pEUv8e4vU",
  authDomain: "tkaweb-64597.firebaseapp.com",
  projectId: "tkaweb-64597",
  storageBucket: "tkaweb-64597.firebasestorage.app",
  messagingSenderId: "473636336956",
  appId: "1:473636336956:web:5a603e0a44129b24ab5a39",
  measurementId: "G-Q5JQ32GYTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const App = () => {
  return (
    <div> hi </div>
  );
};

  
  export default App;
