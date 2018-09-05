import React from 'react';
import logo from './logopent.png'

var output = (props)=>{
 
    return (
        <div className="wrapperInput" >
            
            <div className="divOutput">
                <p>{props.name}</p>
                <p>{props.user}</p>
                <p>{props.password}</p>
                
            </div>
            <div className="buttonInput">
                <a>
                    Register!!
                </a>
            </div>
        </div>
    );
};

export default output;