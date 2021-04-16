import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import auth from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAc1UjZi93gKBf0RHdmE-7HxNfbj7PosTs",
    authDomain: "constat-maroc.firebaseapp.com",
    databaseURL: "https://constat-maroc.firebaseio.com",
    projectId: "constat-maroc",
    storageBucket: "constat-maroc.appspot.com",
    messagingSenderId: "442766635722",
    appId: "1:442766635722:web:e43d831ac8ab1390f5fa33",
    measurementId: "G-ZXJZED7JEY"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

firebase.auth();

export default firebase;