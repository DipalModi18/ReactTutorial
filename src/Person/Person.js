import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Dipal" age="22"/>
    <Person name="Modi" age="22"/>
  </div>
);

// ReactDOM.render(app, document.querySelector('#app'));
export default app;