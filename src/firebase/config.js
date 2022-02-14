import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMyUFfFXp35posFlrea05WlK_tfCr_Spk",
  authDomain: "online-muso.firebaseapp.com",
  projectId: "online-muso",
  storageBucket: "online-muso.appspot.com",
  messagingSenderId: "1081694283563",
  appId: "1:1081694283563:web:454e13cdab311e29fcc76e",
};

firebase.initializeApp(firebaseConfig);

const pjFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const pjAuth = firebase.auth();

const pjStorage = firebase.storage();

export { pjFirestore, pjAuth, timestamp, pjStorage };
