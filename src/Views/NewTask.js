import React, { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { writeTaskData } from '../Authentication/dbwriteuser';
import { AuthContext } from '../Authentication/AuthContext';

 const NewTask = ({modal, toggle, add}) => {
    const {currentUser} = useContext(AuthContext);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
let taskBox = 
    {
        Name:'',
        Description:'',
        key:''
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
        taskBox.key = writeTaskData(currentUser.uid, taskName, description)
        add(taskBox)
        
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle} >
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


