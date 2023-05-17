// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ChNZ7vLesJU71aPhMSDVCEB1g9D6Hwc",
  authDomain: "first-react-app-2e088.firebaseapp.com",
  projectId: "first-react-app-2e088",
  storageBucket: "first-react-app-2e088.appspot.com",
  messagingSenderId: "596914990905",
  appId: "1:596914990905:web:afaaf73d5406017323c2e8",
  measurementId: "G-E257M3LRDL",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
