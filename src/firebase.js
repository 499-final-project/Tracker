import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";


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




export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

