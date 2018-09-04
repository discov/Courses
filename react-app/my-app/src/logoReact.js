import React, { Component } from 'react';
import headLogo from './logo.svg';
import './App.css';

var logo = (props) => {
    return (
        <header style={Object.assign({},props.hdstyle)} >
            <img src={headLogo} 
                style={ Object.assign({},props.style,{float:"left"}) } 
                className="App-logo"
                alt="logo" />
        </header>
    );
}


export default logo;