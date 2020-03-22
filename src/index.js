import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './Person/Person';
import * as serviceWorker from './serviceWorker';
import renderData from './Circle/Circle';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(app, document.getElementById('root'));
  ReactDOM.render(
    <div>
      {renderData}
    </div>,
    document.querySelector("#container")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
