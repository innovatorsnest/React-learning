import React, { Component } from "react";
import "./App.css";
import Student from "./Student/Student";
import Teacher from "./Teacher/Teacher";
import Validation from './Validation/Validation';

class App extends Component {
  
  state = {
    userInput: ''
  }
 
    

  changeTextToggle = (template) => {
    this.setState({
      template: template
    })
  };

  lengthofText  = (event) => {
    // manipulating the state
    this.setState({
      userInput:event.target.value
    })
  }


  render() {


    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={(event) => this.lengthofText(event) } placeholder="type here"/>
        <br/>
        {this.state.userInput}

        <Validation  inputLength={this.state.userInput.length}/>

      </div>
    );
  }
}

export default App;
