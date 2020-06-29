import React from 'react';
import './App.css';
import TwoWayBinding from './../TwoWayBinding/TwoWayBinding';
import ErrorBoundry from './../ErrorBoundry/ErrorBoundry';
import Section3 from './../Section3/Section3/Section3';
import Section4 from '../Section4/Section4';
import * as serviceWorker from '../Section4/serviceWorker';
import Section from '../Scrolling';
import {Element} from 'react-scroll';
import Circle from './../Circle/Circle';
import ScrollComponents from './../Scrolling/ScrollComponents';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "enableScrolling": false
    }
  };

  render() {
    return (
      <div className="App">
        <header className="header">
            Learn React
        </header>
        {/* <ErrorBoundry> */}
          <TwoWayBinding />
        {/* </ErrorBoundry> */}
        <Section3 />
        <React.StrictMode>
          <Section4 />
        </React.StrictMode>
        {/* <Section />  TODO: Complete Scrolling.js and Section.js */}
        <button onClick={() => {this.setState({enableScrolling: !this.state.enableScrolling})}}>Toggle Scrolling</button>
        {this.state.enableScrolling ? <ScrollComponents /> : null} <hr />
        
      </div>
    );
  }
  
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
