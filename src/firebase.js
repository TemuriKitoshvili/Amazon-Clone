import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDY4XL1fEJS_F1b_zh4_KKF3UkZ-IOVqdU",
  authDomain: "clone-b4821.firebaseapp.com",
  databaseURL: "https://clone-b4821.firebaseio.com",
  projectId: "clone-b4821",
  storageBucket: "clone-b4821.appspot.com",
  messagingSenderId: "458280816435",
  appId: "1:458280816435:web:a1bccec9213fab8d17f846",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
