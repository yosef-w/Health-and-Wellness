import React from "react";
import "./login.css";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

const Login = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  );
};

export default Login;
