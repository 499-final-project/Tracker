import React, {useState} from 'react';
import EditTask from '../Views/EditTask'
import NewImage from '../Views/NewImage'
import edit from '../icons/edit-icon.png'
import deletes from '../icons/delete-icon.png'
import image from '../icons/image-icon.png'

const TaskVisual = ({input, index, deleteTask, editList}) => {
    const [modal, Popup] = useState(false);
    const [imageModal, PopupImage] = useState(false);

    const toggle = () => {
        Popup(!modal);
    }

    const imgToggle = () => {
        PopupImage(!imageModal);
    }

    const editTask = (obj) => {
        editList(obj, index)
        Popup(false)
    }

    const handleDelete = () => {
        deleteTask(index)
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
                <img src={input.Image} width ="175px" height="175px" style={{ alignSelf: 'center' }} alt={"image"} 
                onError={(event) => event.target.style.display = 'none'}
                onLoad={(event) => event.target.style.display = 'inline-block'} />

                <div style={{"position": "static", "right" : "20px", "bottom" : "20px"}}>
                    <button  onClick = {() => Popup(true)}  ><img className = "edit" img style = {{ width: 25, height: 25 }} src = {edit} alt = "Edit" /></button>
                    <button  onClick = {handleDelete}><img className = "deletes" img style = {{ width: 25, height: 25 }} src = {deletes} alt = "Delete" /></button>
                    <button  onClick = {() => PopupImage(true)}  ><img className = "image" img style = {{ width: 25, height: 25 }} src = {image} alt = "Image" /></button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} editTask = {editTask} input = {input}/>
        <NewImage modal = {imageModal} toggle = {imgToggle} editImage = {editImage} input = {input}/>
        </div>
    );
};

export default TaskVisual;