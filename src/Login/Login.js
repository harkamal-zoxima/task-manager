import Password from "antd/lib/input/Password";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/jk-logo.png";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <img src={logo} className="image" />
      <div className="inner">
        <input type="text" placeholder="Enter Username" className="text1" />
        <input type="password" placeholder="Enter password"  className="text2" />
        <Link to="/home">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
