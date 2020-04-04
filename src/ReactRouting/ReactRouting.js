import React from "react";
import About from './About';
import Content from  './Content';
import Root from './Root';
import Home from './Home';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

class ReactRouting extends React.Component {
    render() {
        return(
            <div>
                <h1>React routing component</h1>
                <Router>
                    <Route path={'/'} component={Root}>
                        <Route exact path='/' component={Home}></Route>
                        <Route path={'home'} component={Home}></Route>
                        <Route path={'about'} component={About}></Route>
                        <Route path={'content'} component={Content}></Route>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default ReactRouting;