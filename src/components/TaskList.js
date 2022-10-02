import React, {useEffect, useState} from 'react';
import NewTask from '../Views/NewTask'
import TaskVisual from './TaskVisual.js';

const TaskList = () => {
    const [modal,Popup] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    const toggle = () => 
    {
        Popup(!modal);
    }

    const addTask=(input) =>
    {
        taskList.push(input)
        Popup(false)
    }
    return (
        <>
            <div className = "header text-center">
                <h3>Task List</h3>
                <button className = " mt-3"   onClick = {() => Popup(true)} >Create Task</button>
            </div>
            <div className = "task-container "> 
            <br></br>
                {taskList.map((obj, index) => <TaskVisual input = {obj} index = {index}></TaskVisual>)}
            </div>
            <NewTask toggle = {toggle} modal = {modal} add = {addTask}/>
            
        </>
    );
};

export default TaskList;