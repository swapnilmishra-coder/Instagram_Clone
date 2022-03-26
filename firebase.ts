import {initializeApp, getApps, getApp}  from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBGzbIiDNwqszgBm72uMiHBl6Qp4vpQ8ps",
    authDomain: "instagram-clone-e820f.firebaseapp.com",
    projectId: "instagram-clone-e820f",
    storageBucket: "instagram-clone-e820f.appspot.com",
    messagingSenderId: "900107101853",
    appId: "1:900107101853:web:48c2a09c386f5854ba9674"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};