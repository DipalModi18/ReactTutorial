import React from 'react';
import './Person.css';
import {MdAddBox} from 'react-icons/md'; 

const AddPerson = (props) => {
    return (
        <div className="person">
            Enter Name:<br /> <input type="text" id="name"></input> <br /> <br />
            Enter Age:<br /> <input type="text" id="age"></input> <br /> 
            <MdAddBox size="40" onClick={() => props.click(
                {'name': document.getElementById('name').value,
                'age': document.getElementById('age').value}
                )}/>
        </div>
    )
}

export default AddPerson;