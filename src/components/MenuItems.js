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
 //const [ searchInput, setSearchInput] = useState("");
// const [taskList,setTaskList] = useState([]);
   //function to search through tasklist and return array of matches

//regex to check if search term is valid
//const regex = new RegExp(/^[a-zA-Z0-9]+$/);
/*const search = (searchInput) => {
    if (regex.test(searchInput)) {
        let searchResults = [];
        taskList.forEach((task) => {
            if (task.Name.toLowerCase().includes(searchInput.toLowerCase()) || task.Description.toLowerCase().includes(searchInput.toLowerCase())) {
                searchResults.push(task);
            }

        })
        //setTaskList([...searchResults]);
        return searchResults;
    }
}
*/
//handleinut function for search function
/*
const handleInput = (e) => {
    setSearchInput(e.target.value);
    search(e.target.value);
    
}
*/
/*
    const searchTask = (e) => {
        let input = e.target.value.toLowerCase();
        let task = taskList.getElementsByClassName('task-holder');
        for (let i = 0; i < task.length; i++) {
            let taskName = task[i].getElementsByClassName('taskName')[0];
            if (taskName.innerHTML.toLowerCase().indexOf(input) > -1) {
                task[i].style.display = "";
            } else {
                task[i].style.display = "none";
            }
        }
    }
    */
    return (  
        <div className = "menu">
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/TaskList">Task List</Link></li>     
           
         


             <li>{ currentUser ? <Logout/> : <SignInWithGoogle1/>}</li> 
        

           
           
            
            <a className = "more" href = "/#" >More</a>
            <img alt = "arrow"className = "arrow" src = {arrow}/>
            
           
            <img alt = "owl" className = "biden" src = {biden}/>
           
            

        </div>
    );
}

export default MenusItems;