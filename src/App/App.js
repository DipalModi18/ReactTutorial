import React from 'react';
import './App.css';
import TwoWayBinding from './../TwoWayBinding/TwoWayBinding';
import ErrorBoundry from './../ErrorBoundry/ErrorBoundry';
import Section3 from './../Section3/Section3/Section3';
import Section4 from '../Section4/Section4';
import * as serviceWorker from '../Section4/serviceWorker';

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
      <React.StrictMode>
        <Section4 />
      </React.StrictMode>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
