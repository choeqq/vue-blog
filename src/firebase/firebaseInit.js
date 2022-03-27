import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyBQ7EO7nPM42lPLAJ2MXYS_5dTovXdMk",
  authDomain: "vue-blog-79e75.firebaseapp.com",
  projectId: "vue-blog-79e75",
  storageBucket: "vue-blog-79e75.appspot.com",
  messagingSenderId: "877397476623",
  appId: "1:877397476623:web:0c39f5870c901ef1e1aa7a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
