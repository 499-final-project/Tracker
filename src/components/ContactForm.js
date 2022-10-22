import React, { useState} from 'react';
import NewContact from '../Views/NewContact';
const ContactForm = () => {
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


    return (
        <>
            <div>
                <button className = " mt-3"   onClick = {() => Popup(true)} >Contact</button>
            </div>
            
            <NewContact toggle = {toggle} modal = {modal} add = {addTask}/>
            
        </>
    );
};

export default ContactForm;