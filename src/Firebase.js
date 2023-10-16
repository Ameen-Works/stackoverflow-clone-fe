// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAm2j5QCRCCJlRX0r1qBG_be1bXdXSRdyY",
//   authDomain: "stackoverflow-3f0d8.firebaseapp.com",
//   projectId: "stackoverflow-3f0d8",
//   storageBucket: "stackoverflow-3f0d8.appspot.com",
//   messagingSenderId: "76298589116",
//   appId: "1:76298589116:web:26ce6feaf0025dbdd511b9",
//   measurementId: "G-LDJE2JW8YE",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// // const db = firebaseApp.firestore();
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjKCS4mqaTB2MuI4Bk4Wbx2gv68nUUKt4",
  authDomain: "stackoverflow-clone-8fcca.firebaseapp.com",
  projectId: "stackoverflow-clone-8fcca",
  storageBucket: "stackoverflow-clone-8fcca.appspot.com",
  messagingSenderId: "830002674374",
  appId: "1:830002674374:web:ad9102eab6bc49070735c7",
  measurementId: "G-JY937X8519",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
