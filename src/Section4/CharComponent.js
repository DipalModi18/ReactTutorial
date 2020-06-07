import React from 'react';

function CharComponent(props) {
    return(
        <div>
            <div 
                style={{ display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black"}}
                onClick={props.click}>
                {props.char}
            </div>
        </div>
        
    );
}

export default CharComponent;
