import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewContact = ({modal, toggle, add}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    let taskBox = 
    {
        Name:'',
        Email:'',
        Subject:'',
        Message:'',
    }

    const handleInput = (e) => 
    {
        const {name, value} = e.target
        
        if(name === "name")
        {
            setName(value)
        }
        else if (name === "email")
        {
            setEmail(value)
        }
        else if (name === "subject")
        {
            setSubject(value)
        }
        else if (name === "message")
        {
            setMessage(value)
        }
    }
    
    
    const handleAdd = (e) => {
        e.preventDefault()
        taskBox.Name = name
        taskBox.Email = email
        taskBox.Subject = subject
        taskBox.Message = message
        add(taskBox)
        
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Contact Us</ModalHeader>
            <ModalBody>
            <div className = "form-group">
                <label>Name</label>
                <input type="text" className = "form-control" value = {name}
                onChange = {handleInput} name = "name"></input>
            </div>
            <div className = "form-group">
                <label>Email</label>
                <input type="email" className = "form-control" value = {email}
                onChange = {handleInput} name = "email"></input>
            </div>
            <div className = "form-group">
                <label>Subject</label>
                <input type="text" className = "form-control" value = {subject}
                onChange = {handleInput} name = "subject"></input>
            </div>
            <div className = "form-group">
                <label>Message</label>
                <textarea rows = "5" className = "form-control" value = {message}
                onChange = {handleInput} name = "message"></textarea>
            </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleAdd}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default NewContact;