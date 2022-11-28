import React, { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { writeTaskData } from '../Authentication/dbwriteuser';
import { AuthContext } from '../Authentication/AuthContext';
import { sendemail } from '../Emailing/Sendemail';
import  DateTimePicker  from 'react-datetime-picker';

 const NewTask = ({modal, toggle, add}) => {
    const {currentUser} = useContext(AuthContext);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [startdate, setStartDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    const [alertTime, setAlertTime] = useState('');

let taskBox = 
    {
        Name:'',
        Description:'',
        key:'',
        Image: '',
        Startdate: '',
        Enddate: '',
        AlertTime: '',
    }
 
    //function to turn string into date
    //function parseDate(str) {
       // var mdy = str.split('-');
       // return new Date(mdy[0], mdy[1]-1, mdy[2]);
   // }
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
        else if (name === "alertTime")
        {
            setAlertTime(value)
        }
        
        
    }
    

    const handleAdd = (e) => {
        e.preventDefault()
        taskBox.Name = taskName
        taskBox.Description = description
        taskBox.Startdate = startdate.getTime()
        taskBox.Enddate = enddate.getTime()
        taskBox.AlertTime= alertTime
        taskBox.key = writeTaskData(currentUser.uid, taskName, description, taskBox.Startdate, taskBox.Enddate)
        add(taskBox)
        sendemail(taskName,description,enddate,alertTime,taskBox.key);
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
            <div>
                <label>start</label><br></br>
                <DateTimePicker  onChange={setStartDate}  value={startdate} />
            </div>
            <div >
                <label>end</label><br></br>
                <DateTimePicker  onChange={setEndDate}  value={enddate} /> 
            </div>
            <div className = "form-group">
                <label>Notify Me Before End(Optional)</label>
                <select className = "form-control"  onChange = {handleInput} name = "alertTime" defaultValue={alertTime||"0"}>
                    <option value="0">--Choose Alert--</option>
                    <option value="1">1 week before</option>
                    <option value="2">1 day before</option>
                    <option value="3">12 hours before</option>
                    <option value="4">1 hour before</option>
                    <option value="5">30 minutes before</option>
                    <option value="6">10 minutes before</option>
                </select>
            </div>
            

            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleAdd}>Create</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button> 
            </ModalFooter>
      </Modal>
    );
};
/* */
export default NewTask;


