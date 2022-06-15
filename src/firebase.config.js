// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD6EphXacjrLl-hEcrbOBWUF9J-bLkHhyc",

  authDomain: "house-marketplace-app-eac8f.firebaseapp.com",

  projectId: "house-marketplace-app-eac8f",

  storageBucket: "house-marketplace-app-eac8f.appspot.com",

  messagingSenderId: "1035680022495",

  appId: "1:1035680022495:web:2628572d45bf564cdece6a"

};


// Initialize Firebase

initializeApp(firebaseConfig);

export const db = getFirestore()