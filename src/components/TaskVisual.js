import React, {useState} from 'react';
import EditTask from '../Views/EditTask'

const TaskVisual = ({input, index, deleteTask, editList}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const editTask = (obj) => {
        editList(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper m-sm-5">
            <div class = "card-top" ></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#F2FAF1", "border-radius": "10px"}}>{input.Name}</span>
                <p className = "mt-3">{input.Description}</p>
                
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <button  onClick = {() => setModal(true)}  >Edit</button>
                    <button  onClick = {handleDelete}>Delete</button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} editTask = {editTask} input = {input}/>
        </div>
    );
};

export default TaskVisual;