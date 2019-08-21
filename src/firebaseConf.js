import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCQYrb12G_K13vHbFTCISJtj9C5WnN9QgM",
    authDomain: "pushionic-502b7.firebaseapp.com",
    databaseURL: "https://pushionic-502b7.firebaseio.com",
    projectId: "pushionic-502b7",
    storageBucket: "",
    messagingSenderId: "698811961484",
    appId: "1:698811961484:web:13f557c07dfa7c63"
})

export default app;