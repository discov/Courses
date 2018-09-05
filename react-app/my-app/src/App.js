import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './logoReact.js';
import InputForm from './InputForm';
import OutputForm from './OutputForm';
import './App.css';

class App extends Component {
  state = {
    name:"Anonimo",
    user:"invitado",
    password:"12345"
  }
  textChangeHandler = (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  inputFocusHandler= (event)=>{
    event.target.value="";
  }
  render() {
    return (
      <div className="App">
      
        <div className="inout">

          <div className="wrapper">
            <InputForm onChange={this.textChangeHandler.bind(this)}
                        onFocus={this.inputFocusHandler.bind(this)}
                        name={this.state.name}
                        user={this.state.user}
                        password={this.state.password}
            />
          </div>
          <div className="wrapper">
            <OutputForm name={this.state.name}
                        user={this.state.user}
                        password={this.state.password}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
