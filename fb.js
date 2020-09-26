import * as firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyDKnrBa3HfIZUJlfmhY5aXb8_lTgWZeJSk",
    authDomain: "manager-c4765.firebaseapp.com",
    databaseURL: "https://manager-c4765.firebaseio.com",
    projectId: "manager-c4765",
    storageBucket: "manager-c4765.appspot.com",
    messagingSenderId: "400393891684",
    appId: "1:400393891684:web:833096fa72ef02aacdd471",
    measurementId: "G-652QRPMBK2"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase ;