import React, { useState, useContext, } from 'react';
import EditTask from '../Views/EditTask'
import {ref, remove, update } from 'firebase/database';
import { AuthContext } from '../Authentication/AuthContext';
import { db } from '../firebase';
//import { dateToString } from '../helper/getDate';
import NewImage from '../Views/NewImage'
import edit from '../icons/edit-icon.png'
import deletes from '../icons/delete-icon.png'
import image from '../icons/image-icon.png'
import Countdown from 'react-countdown';

const TaskVisual = ({input, index, deleteTask, editList}) => {
    const {currentUser} = useContext(AuthContext);
    const [modal, Popup] = useState(false);
    const [imageModal, PopupImage] = useState(false);

    const toggle = () => {
        Popup(!modal);
    }
    const imgToggle = () => {
        PopupImage(!imageModal);
    }
    const editTask = (obj) => {
        update(ref(db, 'tasks/'+ currentUser.uid + '/' + obj.key),{
            Name: obj.Name,
            Description: obj.Description,
            Startdate: obj.Startdate,
            Enddate: obj.Enddate
        });
        editList(obj, index)
        Popup(false)
    }

    const handleDelete = () => {
       
        remove(ref(db, 'tasks/'+ currentUser.uid + '/' + input.key));
        deleteTask(index);
    }

    const editImage = (obj) => {
        editList(obj, index)
        PopupImage(false)
    }

    return (
        
        <div class = "card-wrapper m-sm-5">
            <div class = "card-top" ></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#F2FAF1", "border-radius": "10px"}}>{input.Name}</span>
                <p className = "mt-3">{input.Description}</p>
                <p className = "mt-3">Time Left: {<Countdown date={ Date.now() + (input.Enddate-input.Startdate)} />}</p>
               
                <img src={input.Image} width ="175px" height="175px" style={{ alignSelf: 'center' }} alt={"image1"} 
                onError={(event) => event.target.style.display = 'none'}
                onLoad={(event) => event.target.style.display = 'inline-block'} />

                <div style={{"position": "static", "right" : "20px", "bottom" : "20px"}}>
                <button  onClick = {() => Popup(true)}  ><img className = "edit" img style = {{ width: 25, height: 25 }} src = {edit} alt = "Edit" /></button>
                    <button  onClick = {handleDelete}><img className = "deletes" img style = {{ width: 25, height: 25 }} src = {deletes} alt = "Delete" /></button>
                    <button  onClick = {() => PopupImage(true)}  ><img className = "image" img style = {{ width: 25, height: 25 }} src = {image} alt = "image1" /></button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} editTask = {editTask} input = {input}/>
        <NewImage modal = {imageModal} toggle = {imgToggle} editImage = {editImage} input = {input}/>
        </div>
    );
};
// <p className = "mt-3">Start: {dateToString(new Date(input.Startdate))}</p>
//<p className = "mt-3">End: {dateToString(new Date(input.Enddate))}</p>
export default TaskVisual;