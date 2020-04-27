import React from 'react';
import './Section3.css';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

class Section3 extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "Dipal"
    }
  
  }

  submit(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div className="Section3">
        <UserInput click={(event) => this.submit(event)}/>
        <UserOutput  username={this.state.username}/>
        <hr />
      </div>
    );
  } 
}

export default Section3;
