import { SignInWithGoogle1 } from "../Authentication/signin";
import { AuthContext } from '../Authentication/AuthContext';
import { useContext } from "react";
import { Logout } from "../Authentication/logout";
const HomePageContainer = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div>
      
      <h1>Home Page</h1>
      <h4>Welcome to Tracker</h4>
     { currentUser ? <Logout/> : <SignInWithGoogle1/>}
    </div>
    
  );
};

export default HomePageContainer;