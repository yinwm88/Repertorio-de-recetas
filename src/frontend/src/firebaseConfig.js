// src/firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyANcpENUNjxjkpxNJNeoe4n8tl-x124IWU",
    authDomain: "cookmaster-add3b.firebaseapp.com",
    databaseURL: "https://cookmaster-add3b-default-rtdb.firebaseio.com",
    projectId: "cookmaster-add3b",
    storageBucket: "cookmaster-add3b.appspot.com",
    messagingSenderId: "703136688698",
    appId: "1:703136688698:web:7ae455192b9214f6846303",
    measurementId: "G-WHZBTSE5QL"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
