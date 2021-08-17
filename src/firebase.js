// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBsbsphP-EENg1VbHNtMZZN-un_BCHt-CY",
    authDomain: "clone-27bdb.firebaseapp.com",
    projectId: "clone-27bdb",
    storageBucket: "clone-27bdb.appspot.com",
    messagingSenderId: "231331197219",
    appId: "1:231331197219:web:18eec2192066330bb19c96",
    measurementId: "G-WHHXZ9KZ2M"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};