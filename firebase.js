



//* Importing functions neeeded from the SDKs we need.
//? We're able to import methods like this since we have installed firebase v9 (modular version) globally. This modular version of firebase is compatible with TREE-SHAKING ALGORITHMS.


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firstore";

//* Your web app's Firebase configuration
//? For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwdypdkSng0txxE2t7Tsj1hNNN8jj1o5I",
    authDomain: "fire-basics-00.firebaseapp.com",
    projectId: "fire-basics-00",
    storageBucket: "fire-basics-00.appspot.com",
    messagingSenderId: "738207108898",
    appId: "1:738207108898:web:85c7e15932d08faa2f9f7b",
    measurementId: "G-DXEDNNMT5Z"
  };

//* Initializing Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // In v8, the syntax used to be `firebase.getAnalytics()`  

console.log(app);