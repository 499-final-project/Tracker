import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';

const EditTask = ({modal, toggle, editTask, input}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [key, setKey] = useState('')
    const [startdate, setStartDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    let taskBox = 
    {
        Name:'',
        Description:'',
        key: '',
        Image: '',
        Startdate: '',
        Enddate: ''
    }

    const handleChange = (e) => {
        
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

    useEffect(() => {
        setTaskName(input.Name)
        setDescription(input.Description)
        setKey(input.key)
        setStartDate(new Date(input.Startdate))
        setEndDate(new Date(input.Enddate))
    },[input.Name, input.Description, input.key, input.Startdate, input.Enddate])

    const handleUpdate = (e) => {
        e.preventDefault();
        taskBox.Name = taskName
        taskBox.Description = description
        taskBox.key = key
        taskBox.Startdate = startdate.getTime()
        taskBox.Enddate = enddate.getTime()
        editTask(taskBox)
        
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} 
                        onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} 
                        onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div>
                <label>start</label>
                <DateTimePicker  onChange={setStartDate}  value={startdate} />
            </div>
            <div >
                <label>end</label>
                <DateTimePicker  onChange={setEndDate}  value={enddate} /> 
            </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;