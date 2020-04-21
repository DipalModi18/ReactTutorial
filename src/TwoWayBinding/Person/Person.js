import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      Enter Name: <input type="text" value={props.name} onChange={props.changeName}></input> 
      <br /> <br />
      <button onClick={() => props.deletePerson(props.id)}>Delete Me!!</button>
    </div>
  );
}

export default Person;