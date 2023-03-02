// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlMyf3clMRnjIElM-YDDK2XmKIRY-XiJ0",
  authDomain: "clone-fec1a.firebaseapp.com",
  projectId: "clone-fec1a",
  storageBucket: "clone-fec1a.appspot.com",
  messagingSenderId: "641122579057",
  appId: "1:641122579057:web:4cee2742441c83e98261d0",
  measurementId: "G-KC3HJNX3ML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
