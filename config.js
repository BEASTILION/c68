import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCwgrtXEUK2fl0ZKMTFGSEG5YrQD51ae2c",
    authDomain: "projects-a1bc9.firebaseapp.com",
    databaseURL: "https://projects-a1bc9-default-rtdb.firebaseio.com",
    projectId: "projects-a1bc9",
    storageBucket: "projects-a1bc9.appspot.com",
    messagingSenderId: "710038392020",
    appId: "1:710038392020:web:b9f0d4499ecadcd084ff41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();