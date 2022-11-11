import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3zC8ufO1RAIuc9IpeefuJF7qJAVZLMCo",
    authDomain: "restaurantapp-207f9.firebaseapp.com",
    databaseURL: "https://restaurantapp-207f9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-207f9",
    storageBucket: "restaurantapp-207f9.appspot.com",
    messagingSenderId: "435597766091",
    appId: "1:435597766091:web:b3b4d86fc01deda8445a4e"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };