import React from 'react';
import logo from './logopent.png'

var input = (props)=>{
 
    return (
        <div className="wrapperInput" >
            <div className="divLogo">
                <img className="logoInput" src={logo} alt="logo"  />
            </div>
            <div className="divInput">
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                
            </div>
            <div className="buttonInput">
                <a>
                    Register!!
                </a>
            </div>
        </div>
    );
};

export default input;