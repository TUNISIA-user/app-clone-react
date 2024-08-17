import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyC3jSKgJ-UJ-szVSU0GQsPsO_YVFqb7Iv8",
    authDomain: "clone-appsamsung.firebaseapp.com",
    projectId: "clone-appsamsung",
    storageBucket: "clone-appsamsung.appspot.com",
    messagingSenderId: "222807092828",
    appId: "1:222807092828:web:8551d9fe67f23514cf0099"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export default auth