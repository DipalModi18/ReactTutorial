// Reference: https://reacttraining.com/react-router/web/guides/quick-start
import React from "react";
import BasicRouting from './BasicRouting';
import NestedRouting from "./NestedRouting";


class ReactRouting extends React.Component {
    render() {
        return(
            <div>
                <BasicRouting />
                <NestedRouting />
                <hr />
            </div>
        )
    }
}

export default ReactRouting;