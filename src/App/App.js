import React from 'react';
import './App.css';
import TwoWayBinding from './../TwoWayBinding/TwoWayBinding';
import ErrorBoundry from './../ErrorBoundry/ErrorBoundry';
import Section3 from './../Section3/Section3/Section3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      {/* <ErrorBoundry> */}
        <TwoWayBinding />
      {/* </ErrorBoundry> */}
      <Section3 />
    </div>
  );
}

export default App;
