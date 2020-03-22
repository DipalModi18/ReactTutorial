// Hooks are used to use state in a functional component
// Hooks are basically functions in the react library which starts with the use keyword
import React, {useState} from 'react';

const ReactHooks = (props) => {
    // useState method returns two object. First one is the current state and the other one is the method to set the state
    // Note that setPersonState method will override the value of the state and not append it so use different useState for different state objects
    const [personState, setPersonState] = useState({
        persons: [
            {
                name: "Dipal",
                age: 22
            }, {
                name: "Modi",
                age: 23
            }
        ]
    });

    const [otherState, setOtherState] = useState("some other value");

    return (
        <div>
            <h1>Hello from ReactHooks!!</h1>
        </div>
    );
}

export default ReactHooks;