import React from 'react'; 
import { useState, useEffect , useContext } from 'react';
import Calander from 'react-calendar';
import { AuthContext } from '../Authentication/AuthContext';
import TaskVisual from './TaskVisual';
import { get, ref } from 'firebase/database';
import { db } from '../firebase';
//npm i react-vertical-timeline-component maybe add timeline
//react-calendar-timeline or  this 
const TaskCalendar = () => {
   //
   const [date, setDate] = useState([]);
   const {currentUser} = useContext(AuthContext);
   // eslint-disable-next-line no-unused-vars
   const [modal,Popup] = useState(false);
   const [taskList,setTaskList] = useState([])

   
   const DeleteTask = (index) => {
    taskList.splice(index,1)
  setTaskList([...taskList])  
 
}

 const editList = (obj, index) => {
     taskList[index] = obj
     setTaskList([...taskList])
     
     Popup(false)
 }
 
 
 


useEffect(()=>{ 
let array = [];

const  Readdbonce =async ()=> {
  
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




},[currentUser.uid, setTaskList])
//if task is available within the range show it
//task is available if 
//task end date is after the range start date
//task start date before range end date


        
   
    if(date.length === 2 )
    {
        console.log(date[0].getTime())
        console.log(date[1].getTime())
    }
        return ( 
      
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="calander">
                            <Calander selectRange = 'true' onChange={setDate} returnValue="range"/>
                        
                        </div>
                        <div className = "task-container "> 
                        <br></br>
                        {taskList.map((obj, index) =>  
                        {
                            if(date.length === 2 && obj.Startdate < date[1].getTime() && obj.Enddate > date[0].getTime()) 
                                {return <TaskVisual input = {obj} index = {index} deleteTask = {DeleteTask} editList = {editList}></TaskVisual>;}
                            return false
                        }
                        
                        )
                            }
                    
                 
                       
                        </div>  
                    </div>
                </div>
            </div>
           

           
       

        );
}
export default TaskCalendar;