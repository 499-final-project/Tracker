import React from 'react';
import '../styles/menuitems.css';
import {Link} from "react-router-dom";



function MenusItems() {
    return (  
        <div className = "menu">
            <li><Link to= "/TaskList">Task List</Link></li>  
            <li><Link to= "/ContactUs">Contact Us</Link></li>


        </div>
    );
}

export default MenusItems;