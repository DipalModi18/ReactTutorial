import React from 'react';
import './App.css';
import Person from '../Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      <Person name1="Dipal" age1="22" name2="Modi" age2="23"></Person>
    </div>
  );
}

export default App;
