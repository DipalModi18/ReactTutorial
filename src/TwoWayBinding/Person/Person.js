import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      Enter Name: <input type="text" value={props.name} onChange={props.changeName}></input>
    </div>
  );
}

export default Person;