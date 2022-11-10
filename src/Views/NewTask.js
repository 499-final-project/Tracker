import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewTask = ({modal, toggle, add}) => {
    
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    
    let taskBox = 
    {
        Name:'',
        Description:'',
        Image: ''
    }

    const handleInput = (e) => 
    {
        const {name, value} = e.target
        
        if(name === "taskName")
        {
            setTaskName(value)
        }
        else if (name === "description")
        {
            setDescription(value)
        }
    }
    
    
    const handleAdd = (e) => {
        e.preventDefault()
        taskBox.Name = taskName
        taskBox.Description = description
        add(taskBox)
        let email = {
            to:'0trackertest0@gmail.com',
            from:'trackertesting499@gmail.com',
            subject:`Tracker Notification`,
            text:`Your new Task: ${taskBox.Name}<br>
            Details:${taskBox.Description}<br>
            Has been added to your task list.`

        }
        fetch('http://localhost:4000/send-email',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(email)
            
        }).then((resp)=>{
            console.log('email sent',resp)
        })
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>New Task</ModalHeader>
            <ModalBody>
            <div className = "form-group">
                <label>Task</label>
                <input type="text" className = "form-control" value = {taskName}
                onChange = {handleInput} name = "taskName"></input>
            </div>
            <div className = "form-group">
                <label>Description</label>
                <textarea rows = "5" className = "form-control" value = {description}
                onChange = {handleInput} name = "description"></textarea>
            </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleAdd}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default NewTask;