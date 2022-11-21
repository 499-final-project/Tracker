import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';


import {Link} from "react-router-dom";
import { SignInWithGoogle1 } from "../Authentication/signin";
import { AuthContext } from '../Authentication/AuthContext';
import { useContext } from "react";
import { Logout } from "../Authentication/logout";



function MenusItems() {

 const {currentUser} = useContext(AuthContext);
 
    return (  
        <div className = "menu">
          
            <li><Link to= "/TaskList">Task List</Link></li>
            <li><Link to= "/TaskCalendar">Task Calendar</Link></li>     
            <li><Link to= "/ContactUs">Contact Us</Link></li>
             <li>{ currentUser ? <Logout/> : <SignInWithGoogle1/>}</li> 
            <a className = "more" href = "/#" >More</a>
            <img alt = "arrow"className = "arrow" src = {arrow}/>
            
           
            
            

        </div>
    );
}

export default MenusItems;