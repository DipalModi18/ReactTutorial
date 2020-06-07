import React from 'react';


function ValidationComponent(props) {
    return(
        <div>{props.length > 5 ? "TEXT TOO LONG" : "TEXT TOO SHORT"}</div>
    )
}

export default ValidationComponent;