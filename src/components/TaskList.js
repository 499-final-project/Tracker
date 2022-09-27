import React, {useState} from 'react';
import NewTask from '../Views/NewTask'


const TaskList = () => {
    const [modal,setModal] = useState(false);
    const [taskList] = useState([])
    
    const toggle = () => 
    {
        setModal(!modal);
    }

    const addTask=(input) =>
    {
        taskList.push(input)
        setModal(false)
    }
    return (
        <>
            <div className = "header text-center">
                <h3>Task List</h3>
                <button  onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "taskContainer"> 
            <br></br>
                {taskList.map((obj) => <li>{obj.Name} , {obj.Description}</li>)}
            </div>
            <NewTask toggle = {toggle} modal = {modal} add = {addTask}/>
        </>
    );
};

export default TaskList;