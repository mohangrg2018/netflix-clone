import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3HsEfz3PYH3X-YGN9l-mAJKHglVnCczY",
  authDomain: "netflix--clone-4eaa7.firebaseapp.com",
  projectId: "netflix--clone-4eaa7",
  storageBucket: "netflix--clone-4eaa7.appspot.com",
  messagingSenderId: "161994609479",
  appId: "1:161994609479:web:9ff11df173995569c53262",
  measurementId: "G-EJ8BPZ3VHN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
