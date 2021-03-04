import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9xTxHOV5heTQuDUel3N4rJe8BrwV2f0g",
  authDomain: "netflix-clone-11344.firebaseapp.com",
  projectId: "netflix-clone-11344",
  storageBucket: "netflix-clone-11344.appspot.com",
  messagingSenderId: "744736279659",
  appId: "1:744736279659:web:60fc7f95e7882740f5b52e",
  measurementId: "G-QCQKJ545VV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
