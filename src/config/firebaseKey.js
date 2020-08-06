import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBignz_aWB2yC0D7a5vOh7bxMY1kBrFn2I",
  authDomain: "tinder-clone-10ca0.firebaseapp.com",
  databaseURL: "https://tinder-clone-10ca0.firebaseio.com",
  projectId: "tinder-clone-10ca0",
  storageBucket: "tinder-clone-10ca0.appspot.com",
  messagingSenderId: "307513998835",
  appId: "1:307513998835:web:42095438bc857ef9786686",
  measurementId: "G-1DBE7MHDCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;