import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBARZstTQq0o8cRtlOmjpWv_LSAH-_zqEE",
  authDomain: "messanger-clone-5baef.firebaseapp.com",
  projectId: "messanger-clone-5baef",
  storageBucket: "messanger-clone-5baef.appspot.com",
  messagingSenderId: "80860149399",
  appId: "1:80860149399:web:0d9153cae6ca779c8edbd2",
  measurementId: "G-SWYR397REF",
});

const db=firebaseapp.firestore();

export default db;


