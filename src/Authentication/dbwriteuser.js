import { ref, set, push } from "firebase/database";
import {db} from '../firebase'

export function writeUserData(userId, name, email, imageUrl) {
  
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
  return(console.log("User added to db"))
}

export function writeTaskData(userId, Taskname, taskDescription) {
  
 push(ref(db, 'tasks/'+ userId ), {
    Taskname: Taskname,
    taskDescription: taskDescription,
    
  });
  return(console.log("task added to db"))
}

