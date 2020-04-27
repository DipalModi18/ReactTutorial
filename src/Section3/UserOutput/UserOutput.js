import React from 'react';


function UserOutput(props) {
    return(
        <div>
            <h3>Hello {props.username}!</h3>
            <p id="para1">Hello UserOutput Para 1!!</p>
            <p id="para2">Hello UserOutput Para 2!!</p>
            {/* <input type="submit" onClick={props.click}></input> */}
        </div>
    );
}

export default UserOutput;

