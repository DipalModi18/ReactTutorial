// Reference: https://reacttraining.com/react-router/web/guides/quick-start
import React from "react";
import Home from './Home';
import About from './About';
import Topics from './Topics';
import {
    Route,
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

function NestedRouting() {
    return(
        <div className="div-style">
            <h3>Nested Routing</h3>
                <Router>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>
                    </nav>
                    <switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/home'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/topics'><Topics /></Route>
                    </switch>
                </Router>
        </div>
    )
}

export default NestedRouting;