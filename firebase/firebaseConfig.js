// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore";
// import auth from "@react-native-firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getCollection,
  getDoc,
  getDocs,
  doc,
  listCollections,
  setDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  collection,
  auth,
  app,
  db,
  firebaseConfig,
  getDoc,
  getCollection,
  setDoc,
  addDoc,
  doc,
  query,
  where,
  listCollections,
  getDocs,
};
