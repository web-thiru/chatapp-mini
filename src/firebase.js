import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2L9Q58xbSM61Cn0_1bKfpLd0wdkx3k98",
        authDomain: "chatapp-5f7b6.firebaseapp.com",
        projectId: "chatapp-5f7b6",
        storageBucket: "chatapp-5f7b6.appspot.com",
        messagingSenderId: "254947789225",
        appId: "1:254947789225:web:d6378bdfcd2624e0211cb8",
        measurementId: "G-4YSDGP69QB"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }