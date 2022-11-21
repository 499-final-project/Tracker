import React from 'react';
import '../styles/navbar.css';
import MenuItems from "../components/MenuItems";
import Menu from "../images/menu.png";
import {getMonthName, getWeekName} from "../helper/getDate.js";
import biden from '../images/biden.png';
import {Link} from "react-router-dom";

function Navbar() {

    return ( 
        <div className = "nav">
        <div className = "leftSide">
            <div className = "logoContainer">
                <li><Link to= "/">
                    <img className = "biden" img style = {{ height: 75}}src = {biden}  alt="owl"/>
                </Link></li>
            </div>
            <div className = "timeContainer">
                <div className="weekday">{getWeekName()},</div>
                <div className="month">{getMonthName()}</div>
            </div>
        </div>
        <div className = "rightSide">
            <MenuItems/>
            <img src = {Menu} className="dropDownMenus" alt ="menu dropdown"/>
        </div>
    </div>
 );
}
export default Navbar;