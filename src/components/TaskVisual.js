import React, {useState} from 'react';
import EditTask from '../Views/EditTask'
import edit from '../icons/edit-icon.png'
import deletes from '../icons/delete-icon.png'

const TaskVisual = ({input, index, deleteTask, editList}) => {
    const [modal, Popup] = useState(false);

    const toggle = () => {
        Popup(!modal);
    }

    const editTask = (obj) => {
        editList(obj, index)
        Popup(false)
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
                
                <div style={{"position": "static", "right" : "20px", "bottom" : "20px"}}>
                    <button  onClick = {() => Popup(true)}  ><img className = "edit" img style = {{ width: 25, height: 25 }} src = {edit} alt = "Edit" /></button>
                    <button  onClick = {handleDelete}><img className = "deletes" img style = {{ width: 25, height: 25 }} src = {deletes} alt = "Delete" /></button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} editTask = {editTask} input = {input}/>
        </div>
    );
};

export default TaskVisual;