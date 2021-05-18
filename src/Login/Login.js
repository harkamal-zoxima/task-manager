import React from 'react';
import logo from '../Assets/jk-logo.png'
import './Login.css'

function Login() {
    return (
        <div className="outer-div">
            <img src={logo} />
            <input type="text" placeholder="Enter Username"/>
            <input type="text" placeholder="Enter password"/>
            
            <button >
                LOG IN
            </button>
        </div>
    );
}


export default Login;