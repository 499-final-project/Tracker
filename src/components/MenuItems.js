import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';

import biden from '../images/biden.png';
import {Link} from "react-router-dom";
import { SignInWithGoogle1 } from "../Authentication/signin";
import { AuthContext } from '../Authentication/AuthContext';
import { useContext } from "react";
import { Logout } from "../Authentication/logout";



function MenusItems() {

 const {currentUser} = useContext(AuthContext);
 
    return (  
        <div className = "menu">
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/TaskList">Task List</Link></li>
            <li><Link to= "/TaskCalander">Task Calander</Link></li>     
            <li><Link to= "/ContactUs">Contact Us</Link></li>
         


             <li>{ currentUser ? <Logout/> : <SignInWithGoogle1/>}</li> 
        

           
           
            
            <a className = "more" href = "/#" >More</a>
            <img alt = "arrow"className = "arrow" src = {arrow}/>
            
           
            <img alt = "owl" className = "biden" src = {biden}/>
           
            

        </div>
    );
}

export default MenusItems;