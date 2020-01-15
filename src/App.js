import React, { Component } from "react";
import "./App.css";
import Student from "./Student/Student";
import Teacher from "./Teacher/Teacher";
import Validation from "./Validation/Validation";
import Character from "./Character/Character";

class App extends Component {
  state = {
    userInput: ""
  };

  changeTextToggle = template => {
    this.setState({
      template: template
    });
  };

  lengthofText = event => {
    // manipulating the state
    this.setState({
      userInput: event.target.value
    });
  };

  removeCharacter = (id) => {
    const characters = this.state.userInput.split('');
    console.log('id here', id);

    const charIndex = characters.findIndex((p,index) => {
      return index === id;
    })

    console.log('character index returned is ', charIndex);

    const charactersClone = [...characters];

    charactersClone.splice(charIndex,1);
    console.log('character index returned is ', charactersClone);

    this.setState({
      userInput: charactersClone.join('')
    })




  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={event => this.lengthofText(event)}
          placeholder="type here"
        />
        <br />
        {this.state.userInput}

        <Validation inputLength={this.state.userInput.length} />

        {
          this.state.userInput.split('').map((input,index) => {
            console.log('index', index);
            return <Character char={input} key={index} click={this.removeCharacter.bind(this,index)} />;
          })
        }
        
      </div>
    );
  }
}

export default App;
