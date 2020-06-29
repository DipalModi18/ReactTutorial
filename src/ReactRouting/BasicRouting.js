import React from "react";
import Header from './Header';
import About from './About';
import Content from  './Content';
import Home from './Home';
import {
    Route,
    BrowserRouter as Router // A <BrowserRouter> uses regular URL paths.
} from 'react-router-dom';
import './style.css';

function BasicRouting() {
    return(
        <div className="div-style">
            <h3>Basic Routing</h3>
                <Router> {/* At the core of every React Router application should be a router component. */}
                    <Header />
                    <switch>  {/* When a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and ignores all others. */}
                        <Route path='/home'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/content'><Content /></Route>
                        <Route exact path='/' component={Home}></Route>
                    </switch>
                </Router>
        </div>
    )
}

export default BasicRouting;