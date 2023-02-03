import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  // Fill up the config to run the app
  apiKey: "AIzaSyBfMz0XfQyz-e9G-5WWZmTFtH9LOGpPBzs",
  authDomain: "fir-67322.firebaseapp.com",
  projectId: "fir-67322",
  storageBucket: "fir-67322.appspot.com",
  messagingSenderId: "891978025803",
  appId: "1:891978025803:web:5afc84f300925fcb5bf6ce"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
