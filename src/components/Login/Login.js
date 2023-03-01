import React from "react";
import "./Login.css";
import amazon_logo from "../../assets/amazon_logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={amazon_logo} alt="" />
      </Link>
      <div className="login__container">
          
      </div>
    </div>
  );
}

export default Login;
