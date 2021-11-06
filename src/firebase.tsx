import "firebase/firestore";
import firebase from "firebase/app";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAUEAOsrkymObjEEk0zhbuoqnjhSV2mhZY",
  authDomain: "chat-app-cab0c.firebaseapp.com",
  projectId: "chat-app-cab0c",
  storageBucket: "chat-app-cab0c.appspot.com",
  messagingSenderId: "111029615733",
  appId: "1:111029615733:web:f7c5f4c94b1f753a27cc3c",
};
//connecting to the database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
