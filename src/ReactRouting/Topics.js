import React from "react";
import { useRouteMatch, Link, Switch, Route, useParams } from "react-router-dom";

function Topics() {
    let match = useRouteMatch()
    return(
        <div>
            <h4>Topic</h4>
            <ul>
                <li><Link to={`${match.url}/abc`}>abc</Link></li>
                <li><Link to={`${match.url}/xyz`}>xyz</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic /></Route>
            </Switch>
        </div>
    )
}

function Topic() {
    let {topicId} = useParams();
    return <h5>Requested Topic: {topicId}</h5>
}

export default Topics;