// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7XzNXqjQTGOp8u_Ze3rQ6Qw1POWCTfWY",
    authDomain: "dragon-news-c46bb.firebaseapp.com",
    projectId: "dragon-news-c46bb",
    storageBucket: "dragon-news-c46bb.appspot.com",
    messagingSenderId: "148094520772",
    appId: "1:148094520772:web:8d831d83da4b413c54a891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;