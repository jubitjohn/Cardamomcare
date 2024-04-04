import { initializeApp } from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Your app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPg-0T6W2J-OYs5TdmMdLd_1JJzB-l894",
  authDomain: "cardamomcare-79da3.firebaseapp.com",
  projectId: "cardamomcare-79da3",
  storageBucket: "cardamomcare-79da3.appspot.com",
  messagingSenderId: "860137368879",
  appId: "1:860137368879:web:54448165c3f48ad56d45da",
  measurementId: "G-W0WN9FJST6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firestore();
const storageRef = storage();

export { storageRef as storage, db, auth, app, firebaseConfig };
