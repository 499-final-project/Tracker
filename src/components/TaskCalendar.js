import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'; 
import { useState, useEffect , useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { get, ref } from 'firebase/database';
import { db } from '../firebase';

const localizer = momentLocalizer(moment)

const TaskCalendar = (props) => {
    
   const {currentUser} = useContext(AuthContext);
   // eslint-disable-next-line no-unused-vars
   const [modal,Popup] = useState(false);
   const [taskList,setTaskList] = useState([])
  const [events, setEvents] = useState([])
   
 
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
    
//convert tasklist to events
useEffect(() => {
    const events = taskList.map((task) => {
        return {
            title: task.Name,
            start: new Date(task.Startdate),
            end: new Date(task.Enddate),
            desc: task.Description,
            key: task.key
        }
    })
    setEvents(events)
}, [taskList])

    
    
    return (

    
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      popup
      //show desc as popup in middle of screen on onSelectEvent
      onSelectEvent={(event) => window.alert(event.desc)}
      
    
    

    />
  </div>
)}

export default TaskCalendar;