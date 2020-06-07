import React from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class Section4 extends React.Component {
  constructor() {
    super();
    this.state = {
      length: 0,
      text: ""
    }
  }

  getLength(event) {
    let text = event.target.value;
    let length = text.length;
    document.getElementById("lengthPara").innerHTML = "Length: " + length;
    this.setState({length: length, text: text});
  }

  removeChar(index) {
    let textArray = [...this.state.text]; //make copy of the text then mutate it
    let updatedText = textArray.splice(index, 1)
    let text = textArray.join("");
    this.setState({text: text})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.getLength(event)}></input>
        <p id="lengthPara"></p>
        <ValidationComponent length={this.state.length} />
        {this.state.text.split("").map((char, index) => 
          <CharComponent char={char} click={() => this.removeChar(index)}/>
        )}
        <hr />
      </div>
    );
  }
  
}

export default Section4;
