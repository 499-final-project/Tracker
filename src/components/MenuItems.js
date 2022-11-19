import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';
import search from '../images/search.png';
import {Link} from "react-router-dom";



function MenusItems() {
    return (  
        <div className = "menu">
            <li><Link to= "/TaskList">Task List</Link></li>
            <li><Link to= "/ContactUs">Contact Us</Link></li>
            <a className = "more" href = "#" >More</a>
            <img className = "arrow" src = {arrow}/>


        </div>
    );
}

export default MenusItems;