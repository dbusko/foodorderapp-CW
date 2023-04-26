import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyARg44i2fAlXnfmSRxwKM35TO6QUl1hVn4",
    authDomain: "restaurantapp-ac671.firebaseapp.com",
    databaseURL: "https://restaurantapp-ac671-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ac671",
    storageBucket: "restaurantapp-ac671.appspot.com",
    messagingSenderId: "52182124472",
    appId: "1:52182124472:web:c0973b5c7c057ce6d1314d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };