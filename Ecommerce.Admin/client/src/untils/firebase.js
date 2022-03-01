import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAssLCMNgmZQ3a26ujWvHbaSlJzJHHjwkQ",
    authDomain: "ecommercewebsite-a0c8c.firebaseapp.com",
    projectId: "ecommercewebsite-a0c8c",
    storageBucket: "ecommercewebsite-a0c8c.appspot.com",
    messagingSenderId: "550119996718",
    appId: "1:550119996718:web:612cdecbd7cafb0beb0ebf",
    measurementId: "G-3QJ9SDHHEX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  const analytics = getAnalytics(app);



  
  
