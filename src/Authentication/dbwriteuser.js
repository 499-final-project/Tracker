
import { ref, set, push, onValue, get,child} from "firebase/database";
import  { useContext } from "react";


import {db} from '../firebase'
import { AuthContext } from "./AuthContext";


export function writeUserData(userId, name, email, imageUrl) {
  
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
  return(console.log("User added to db"))
}

export function writeTaskData(userId, Taskname, taskDescription, startDate, endDate) {
  
 let post =push(ref(db, 'tasks/'+ userId ),
  {
    Name: Taskname,
    Description: taskDescription,
    Startdate: startDate,
    Enddate: endDate
    
  });
  return(post.key)
}


export  function  GetListOfTasks (){
  const {currentUser} = useContext(AuthContext);
 
  try {
   let taskref = ref(db, 'tasks/' + currentUser.uid);
     
     let tasklist= [];
      onValue(taskref, (snapshot) => {
     
     snapshot.forEach((childSnapshot) => {
      let taskBox = 
         {
             Name:'',
             Description:'',
             key:''
         }; 
         
      taskBox.Name  = childSnapshot.val().Name;
       taskBox.Description = childSnapshot.val().Description;
       taskBox.key = childSnapshot.key;
         tasklist.push(taskBox);
       
     },)
     
    
   }, 
   {onlyOnce: true,}
  );
   
  return tasklist;
 
  } catch (error) {
   return error;
  } 
 }
//get list of all tasks when going to tasklist page and save push key
// create map  with push uid as key and task name and despcription as value 
//go through map and add each task to the screen
//on update change task descrition on currentUser uid and push uid 
//delete task using its push uid
// use map to create search function
//
 export function Readdbonce() {

 
  const {currentUser} = useContext(AuthContext);
    let array = [];
  get(child(db, 'tasks/' + currentUser.uid)).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot)=>{
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


      })
        
        
          // ...
        
        return array; 
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
 }

