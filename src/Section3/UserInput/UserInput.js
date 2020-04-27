import React from 'react';


class UserInput extends React.Component {
    render() {
        return(
            <div>
                <input type="text" id="input" onChange={(event) => this.props.click(event)}></input>
            </div>
        )
    }
}


export default UserInput;
