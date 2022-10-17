import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';
import search from '../images/search.png';
import biden from '../images/biden.png';
import {Link} from "react-router-dom";
import TaskList from './TaskList'



function MenusItems() {
    return (  
        <div className = "menu">
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/TaskList">Task List</Link></li>
            <li><Link to= "/UpcomingTask">Upcoming Task</Link></li>
            <li><Link to= "/ContactUs">Contact Us</Link></li>
            <a className = "more" href = "#" >More</a>
            <img className = "arrow" src = {arrow}/>
            <img className = "search" src = {search}/>
            <img className = "biden" src = {biden}/>


        </div>
    );
}

export default MenusItems;