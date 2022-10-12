import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';
import search from '../images/search.png';
import biden from '../images/biden.png';

function MenusItems() {
    return (  
        <div className = "menu">
            <a href = "https://www.google.com/">Google</a>
            <a href = "https://www.bing.com/">Bing</a>
            <a href = "https://www.yahoo.com/">Yahoo</a>
            <a href = "https://duckduckgo.com/">Duckduckgo</a>
            <a href = "https://yandex.com/">Yandex</a>

            <a className = "more" href = "#" >More</a>
            <img className = "arrow" src = {arrow}/>
            <img className = "search" src = {search}/>
            <img className = "biden" src = {biden}/>


        </div>
    );
}

export default MenusItems;