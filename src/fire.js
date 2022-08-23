import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_ilzZt0uIu5xxINEH-rUARJ7Jswei3kc",
    authDomain: "login-58a64.firebaseapp.com",
    projectId: "login-58a64",
    storageBucket: "login-58a64.appspot.com",
    messagingSenderId: "489608252626",
    appId: "1:489608252626:web:025e704eabd10239f8b10b"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;