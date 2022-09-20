import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAEglt59txylPIUz-yOmZtBCIwXIjQUQ1A",
  authDomain: "tester-f36fb.firebaseapp.com",
  databaseURL: "https://tester-f36fb-default-rtdb.firebaseio.com",
  projectId: "tester-f36fb",
  storageBucket: "tester-f36fb.appspot.com",
  messagingSenderId: "63838522381",
  appId: "1:63838522381:web:5c7983bb0c28677fa09944",
  measurementId: "G-8WF0K86PYJ"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
