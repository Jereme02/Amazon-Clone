import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAmMaak_YQP21sbWjf-KxWDswwcyJQWewE",
  authDomain: "clone-e9fec.firebaseapp.com",
  databaseURL: "https://clone-e9fec.firebaseio.com",
  projectId: "clone-e9fec",
  storageBucket: "clone-e9fec.appspot.com",
  messagingSenderId: "648744366110",
  appId: "1:648744366110:web:99405a9070b8808659be0f",
  measurementId: "G-313TTV6640",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
