import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDndgPosScELEMf5XEE7bh9tXPfwkddMI4",
  authDomain: "netflix-eb88c.firebaseapp.com",
  projectId: "netflix-eb88c",
  storageBucket: "netflix-eb88c.appspot.com",
  messagingSenderId: "113522074370",
  appId: "1:113522074370:web:1f1b0ec9e8ed7a66e7181b",
  measurementId: "G-J3EX7309X7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
