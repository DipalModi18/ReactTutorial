import React from "react";
import Header from './Header';
import About from './About';
import Content from  './Content';
import Home from './Home';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import './style.css';

function BasicRouting() {
    return(
        <div className="div-style">
            <h3>Basic Routing</h3>
                <Router>
                    <Header />
                    <switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/home'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/content'><Content /></Route>
                    </switch>
                </Router>
        </div>
    )
}

export default BasicRouting;