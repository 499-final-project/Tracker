import React, { useState, useContext, useEffect} from 'react';
import NewTask from '../Views/NewTask'
import TaskVisual from './TaskVisual';
import { get, ref } from 'firebase/database';
import { AuthContext } from '../Authentication/AuthContext';
import { db } from '../firebase';
import {useLocation} from "react-router-dom";
import '../styles/TaskList.css';




const  TaskList = () => {
     const {currentUser} = useContext(AuthContext);
    const [modal,Popup] = useState(false);
    const [taskList,setTaskList] = useState([])
    const location = useLocation();
    
    const [ searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const toggle = () => 
    {
        Popup(!modal);
    }

  
  const addTask= (input) =>
    {
        taskList.push(input)
        searchResults.push(input)
        Popup(false)
    }
    
    const DeleteTask = (index) => {
       taskList.splice(index,1)
     setTaskList([...taskList])  
     setSearchResults([...taskList]) 
 }
 
    const editList = (obj, index) => {
        taskList[index] = obj
        setTaskList([...taskList])
        setSearchResults([...taskList]) 
        Popup(false)
    }
    
    
    


useEffect(()=>{ 
  let array = [];
  
 const  Readdbonce =async ()=> {
      console.log("it ran");
      await get(ref(db, 'tasks/' + currentUser.uid)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach( (childSnapshot)=>{
          let taskBox = 
          {
              Name:'',
              Description:'',
              key:'',
                Startdate:'',
                Enddate:''
          }; 
          
       taskBox.Name  = childSnapshot.val().Name;
        taskBox.Description = childSnapshot.val().Description;
        taskBox.Startdate = childSnapshot.val().Startdate;
        taskBox.Enddate = childSnapshot.val().Enddate;
        taskBox.key = childSnapshot.key;
         array.push(taskBox);      
         
  
        },)
           
            setTaskList([...array]);  
            setSearchResults([...array]);
            return;  
        } 
      else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
   }
  Readdbonce();
   
   


},[currentUser.uid, setTaskList, setSearchResults])


//function to search through tasklist and return array of matches
const search = (searchInput) => {
    
    let searchResults = [];
    taskList.forEach((task) => {
        if (task.Name.toLowerCase().includes(searchInput.toLowerCase()) || task.Description.toLowerCase().includes(searchInput.toLowerCase())) {
            searchResults.push(task);
        }
        
    })
    setSearchResults([...searchResults]);
    return null;
}

const handleSearchChange = (e) => {
       
    const {name, value} = e.target
    if(name === "searchInput") {
        
            setSearchInput(value)
        
}

search(value);

}       
    
      
   
    return (
        <>
            <div>
                <h1>Task List</h1>
             <button className = "button-62"   onClick = {() => Popup(true)} >Create Task</button>
             <div>



             </div>
            <div>
                
                <div className = 'bar'>
                {location.pathname === '/TaskList' ?  <>
            <input className ='search' type="search" placeholder="Search" onChange={handleSearchChange} ></input></>  : null}
            </div>
               
               
            </div>
            <div className = "task-container "> 
            <br></br>
                
                {searchInput === null ? taskList.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {DeleteTask} editList = {editList}></TaskVisual>) :
                searchResults.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {DeleteTask} editList = {editList}></TaskVisual>) }
            </div>
            <NewTask toggle = {toggle} modal = {modal} add = {addTask}/>
            
            </div>
        </>
    );
};
 /*  <img  alt="magnifying-glass" className="search" alignItems  src={searchbtn}  /> */
export default TaskList;
//{taskslist1.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {deleteTask} editList = {editList}></TaskVisual>)} 

//{taskList.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {DeleteTask} editList = {editList}></TaskVisual>)}
