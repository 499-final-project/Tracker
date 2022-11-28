import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'; 
import { useState, useEffect , useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { get, ref } from 'firebase/database';
import { db } from '../firebase';



const localizer = momentLocalizer(moment)

const TaskCalendar = () => {
    
   const {currentUser} = useContext(AuthContext);
   // eslint-disable-next-line no-unused-vars
   const [modal,Popup] = useState(false);
   const [taskList,setTaskList] = useState([])
  const [events, setEvents] = useState([])

 /*
  const toggle = () => 
  {
      Popup(!modal);
  }
  */
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
/*
    //find task by key using event key
    const findTask = (key) => {
        let task = taskList.find((task) => task.key === key)
        return task
    }
    //return a modal popup of event
    const eventInfo = (event, modal, toggle) => {
      let task = findTask(event.key)
      return (
        
       //create  modal card with task info
        
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.Name}</h5>
                <p className="card-text">{task.Description}</p>
            </div>
        </div>
        

        
      )
  }
    
    */


    return (

    
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      popup
     //show eventinfo when event is clicked
      onSelectEvent={(event) => window.alert(event.desc)}
     

    />
  </div>
)}

export default TaskCalendar;