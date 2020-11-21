import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAK4gwJF8Uhk-ovTVb9aKSy_U3nGGdWvT4",
    authDomain: "challenge-9635d.firebaseapp.com",
    databaseURL: "https://challenge-9635d.firebaseio.com",
    projectId: "challenge-9635d",
    storageBucket: "challenge-9635d.appspot.com",
    messagingSenderId: "472365229013",
    appId: "1:472365229013:web:f418045e622b8036acd35c",

  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth =firebase.auth();
    
   export {db,auth}