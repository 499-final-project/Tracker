

import { writeUserData } from "./dbwriteuser";
import { AuthContext } from "./AuthContext";
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'


export  function SignInWithGoogle1() {

const history = useNavigate();

const {SignInWithGoogle} = useContext(AuthContext);

 async function handlesubmit(e) {
 try { 
  
   e.preventDefault();
   let result = await SignInWithGoogle(); 
   const name = result.user.displayName;
   const email = result.user.email;
   const profilePic = result.user.photoURL;

  
    writeUserData(result.user.uid, name, email, profilePic);

   localStorage.setItem("name", name);
   localStorage.setItem("email", email);
   localStorage.setItem("profilePic", profilePic);
   console.log('login success');
   history("/");
 } catch (error) {
  console.log(error);
 }


}
 return (
 <>
 
    <button  onClick={handlesubmit}>Sign in with google</button>
 </>
 )
}

