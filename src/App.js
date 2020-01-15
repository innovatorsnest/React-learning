import React, { Component } from "react";
import "./App.css";
import Student from "./Student/Student";
import Teacher from "./Teacher/Teacher";

class App extends Component {
  state = {
    // predefined and ready to use
    name: "tushar",
    hideIt: false,
    template: ''
  };

  changeTextToggle = (template) => {
    this.setState({
      template: template
    })
  };

  render() {

    let showTemplate = null;

    if(this.state.template === 'student') {
      showTemplate = (
        <Student/>
      )
    } 
    if(this.state.template === 'teacher') {
      showTemplate = (
        <Teacher/>
      )
    }

    return (
      <div>
        <input
          type="button"
          value="Show Teacher"
          onClick={this.changeTextToggle.bind(this,'teacher')}
          className="toggle-button"
        />
        <input
          type="button"
          value="Show Student"
          onClick={this.changeTextToggle.bind(this,'student')}
          className="toggle-button"
        />

        {showTemplate}

      </div>
    );
  }
}

export default App;
