import React from 'react';
import './App.css';
import Person from '../Person/Person';
import ReactRouting from '../ReactRouting/ReactRouting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      <Person name1="Dipal" age1="22" name2="Modi" age2="23"></Person>
      <ReactRouting></ReactRouting>
    </div>
  );
}

export default App;
