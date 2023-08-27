import React from "react";
import "./register.css";
import RegisterForm from "./RegisterForm";
import RegisterImage from "./RegisterImage";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <RegisterForm />
        <RegisterImage />
      </div>
    </div>
  );
};

export default Register;
