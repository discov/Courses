import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './logoReact.js';
import InputForm from './InputForm';
import './App.css';

class App extends Component {
  render() {
    let anim = [
        {animationName: "App-logo-spin"},
        {animationDuration: "2000ms"},
        {animationTimingFunction: "linear"},
        {animationDelay: "0s"},
        {animationIterationCount: "infinite"},
        {animationDirection: "normal"},
        {animationFillMode: "none"},
        {animationPlayState: "running"}
    ];
    return (
      <div className="App">
        <div className="wrapper">
  
        </div>
        <InputForm/>
      </div>
    );
  }
}

export default App;
