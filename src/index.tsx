import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// lib firebase
import firebase from 'firebase/app';
import * as serviceWorker from './ServiceWorker';

//adicionando configuração do firebase para login e functions
const configFirebase = JSON.parse(process.env.REACT_APP_FIREBASE || '');
firebase.initializeApp(configFirebase);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
