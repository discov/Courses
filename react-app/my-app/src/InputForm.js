import React from 'react';
import logo from './logopent.png'

var input = (props)=>{
 
    return (
        <div className="wrapperOutput" >
            <div className="divLogo">
                <img className="logoInput" src={logo} alt="logo"  />
            </div>
            <div className="divInput">
                <input name="name" type="text" placeholder="Name"
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        value={props.name}/>
                <input name="user" type="text" placeholder="User"
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        value={props.user}/>
                <input name="password" type="text" placeholder="Password"
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        value={props.password}/>
                        />
            </div>
        </div>
    );
};

export default input;