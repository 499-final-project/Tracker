import React, { useState} from 'react';
import NewTask from '../Views/NewTask'
import TaskVisual from './TaskVisual';

const TaskList = () => {
    const [modal,Popup] = useState(false);
    const [taskList,setTaskList] = useState([])
   
    
    const toggle = () => 
    {
        Popup(!modal);
    }

    const addTask=(input) =>
    {
        taskList.push(input)
        Popup(false)
    }

    const deleteTask = (index) => {
        taskList.splice(index,1)
        setTaskList([...taskList])
    }
    const editList = (obj, index) => {
        taskList[index] = obj
        setTaskList([...taskList])
        Popup(false)
    }

    return (
        <>
            <div>
           
            <div>
                <h1>Task List</h1>
                <button className = " mt-3"   onClick = {() => Popup(true)} >Create Task</button>
            </div>
            <div className = "task-container "> 
            <br></br>
                {taskList.map((obj, index) => <TaskVisual input = {obj} index = {index} deleteTask = {deleteTask} editList = {editList}></TaskVisual>)}
            </div>
            <NewTask toggle = {toggle} modal = {modal} add = {addTask}/>
            </div>
        </>
    );
};

export default TaskList;