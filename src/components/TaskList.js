import React, { useState, useContext, useEffect} from 'react';
import NewTask from '../Views/NewTask'
import TaskVisual from './TaskVisual';
import { get, ref } from 'firebase/database';
import { AuthContext } from '../Authentication/AuthContext';
import { db } from '../firebase';



const  TaskList = () => {
     const {currentUser} = useContext(AuthContext);
    const [modal,Popup] = useState(false);
    const [taskList,setTaskList] = useState([])
    
     
   
  
    const toggle = () => 
    {
        Popup(!modal);
    }

  
  const addTask= (input) =>
    {
        taskList.push(input)
        Popup(false)
    }
    
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
              key:''
          }; 
          
       taskBox.Name  = childSnapshot.val().Name;
        taskBox.Description = childSnapshot.val().Description;
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




 
          
    
      



     
   
    return (
        <>
            <div>
           
            <div>
                <h1>Task List</h1>
                <button className = " mt-3"   onClick = {() => Popup(true)} >Create Task</button>
            </div>
            <div className = "task-container "> 
            <br></br>
                {taskList.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {DeleteTask} editList = {editList}></TaskVisual>)}
                
            </div>
            <NewTask toggle = {toggle} modal = {modal} add = {addTask}/>
            
            </div>
        </>
    );
};
 /*  */
export default TaskList;
//{taskslist1.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {deleteTask} editList = {editList}></TaskVisual>)} 
//<LoadTasks  modal = {modal} add={addTask}/>