// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.REACT_APP_apiKey,
  // authDomain: import.meta.env.REACT_APP_authDomain,
  // projectId: import.meta.env.REACT_APP_projectId,
  // storageBucket: import.meta.env.REACT_APP_storageBucket,
  // messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
  // appId: import.meta.env.REACT_APP_appId,
  apiKey: "AIzaSyCLgCXhKcxtvE6n10narREo8k8ay4AxRNo",
  authDomain: "job-portal-898c7.firebaseapp.com",
  projectId: "job-portal-898c7",
  storageBucket: "job-portal-898c7.appspot.com",
  messagingSenderId: "796078503123",
  appId: "1:796078503123:web:6f9a7cdc5a257d0009d026",
  measurementId: "G-MDTWQDPKGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
