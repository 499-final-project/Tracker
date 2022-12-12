import React from 'react';
import '../styles/menuitems.css';


import {Link} from "react-router-dom";
import { SignInWithGoogle1 } from "../Authentication/signin";
import { AuthContext } from '../Authentication/AuthContext';
import { useContext } from "react";
import { Logout } from "../Authentication/logout";
import moon from "../icons/moon.png";
import sun from "../icons/sun.png";




function MenusItems() {

 const {currentUser} = useContext(AuthContext);

    const toggle = () =>{
        const icon = document.getElementById("toggleDark")
        document.body.classList.toggle("dark")
        if(document.body.classList.contains("dark")){
            icon.src = sun;
            
          
        }else{
            icon.src = moon;
           
           
        }
    }


    return (  
        
        <div className = "menu">
            <li><Link to= "/TaskList">Task List</Link></li>
            <li><Link to= "/TaskCalendar">Task Calendar</Link></li>     
            <li><Link to= "/ContactUs">Contact Us</Link></li>
            <li>{ currentUser ? <Logout/> : <SignInWithGoogle1/>}</li> 
            <li><img id="toggleDark" onClick={toggle} alt="Toggle Pictures" src={moon} /> </li>
        </div>
    
       
    
    );
}

export default MenusItems;