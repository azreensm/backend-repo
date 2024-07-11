// config/firebase.js
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDupw0LS4BS5z35sF5_6qmNUlVk70RbSX0",
    authDomain: "ebuddy-project-36cf6.firebaseapp.com",
    projectId: "ebuddy-project-36cf6",
    storageBucket: "ebuddy-project-36cf6.appspot.com",
    messagingSenderId: "444484954884",
    appId: "1:444484954884:web:f6d5090819be901a117e51",
    measurementId: "G-XCFX16XXYC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { app, auth };
