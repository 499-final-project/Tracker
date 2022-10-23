import React, { useState, useContext, } from 'react';
import EditTask from '../Views/EditTask'
import {ref, remove, update } from 'firebase/database';
import { AuthContext } from '../Authentication/AuthContext';
import { db } from '../firebase';

const TaskVisual = ({input, index, deleteTask, editList}) => {
    const {currentUser} = useContext(AuthContext);
    const [modal, Popup] = useState(false);

    const toggle = () => {
        Popup(!modal);
    }

    const editTask = (obj) => {
        update(ref(db, 'tasks/'+ currentUser.uid + '/' + obj.key),{
            Name: obj.Name,
            Description: obj.Description
        });
        editList(obj, index)
        Popup(false)
    }

    const handleDelete = () => {
       
        remove(ref(db, 'tasks/'+ currentUser.uid + '/' + input.key));
        deleteTask(index);
    }
/*
    useEffect(()=>{
        async function DeleteTask(key){
            const {currentUser} = useContext(AuthContext);
            await remove(db, 'tasks/'+ currentUser.uid + '/' + key);
             return true;
           }
          DeleteTask(input.key);
          
    },[input.key])
*/

    return (
        <div class = "card-wrapper m-sm-5">
            <div class = "card-top" ></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#F2FAF1", "border-radius": "10px"}}>{input.Name}</span>
                <p className = "mt-3">{input.Description}</p>
                
                <div style={{"position": "static", "right" : "20px", "bottom" : "20px"}}>
                    <button  onClick = {() => Popup(true)}  >Edit</button>
                    <button  onClick = {handleDelete}>Delete</button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} editTask = {editTask} input = {input}/>
        </div>
    );
};

export default TaskVisual;