import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import * as firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfvI-lNTpfh5Ucb5tj3u4ccB8-oyQk5Nk",
    authDomain: "futuretube-app.firebaseapp.com",
    databaseURL: "https://futuretube-app.firebaseio.com",
    projectId: "futuretube-app",
    storageBucket: "futuretube-app.appspot.com",
    messagingSenderId: "57965594823",
    appId: "1:57965594823:web:3f3f35f979d9d112a256e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'))
