import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewImage = ({modal, toggle, editImage, input}) => {
    const [imgUrl, setImgUrl] = useState('');

    let taskBox = 
    {
        Name:'',
        Description:'',
        Image: ''
    }

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "imgUrl")
        {
            setImgUrl(value)
        }

    }

    useEffect(() => {
        setImgUrl(input.Image)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        taskBox = input
        taskBox.Image = imgUrl
        editImage(taskBox)
        
    }
    const test = (e) => {
       alert(input.Name)
        
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>New Image</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Image url</label>
                        <input type="url" className = "form-control" value = {imgUrl} 
                        onChange = {handleChange} name = "imgUrl"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default NewImage;