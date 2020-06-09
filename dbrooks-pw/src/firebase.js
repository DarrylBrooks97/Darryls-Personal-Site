import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCCeIC-t7a80e-HdNGt09fD6kybdB0gFLk",
  authDomain: "db-personal-website.firebaseapp.com",
  databaseURL: "https://db-personal-website.firebaseio.com",
  projectId: "db-personal-website",
  storageBucket: "db-personal-website.appspot.com",
  messagingSenderId: "383341817862",
  appId: "1:383341817862:web:d337f488f605a59f999387",
  measurementId: "G-XZZTHGSPE1",
};
// Initialize Firebase
// firebase.analytics();

const db = firebase.initializeApp(firebaseConfig).firestore();

export { db };
