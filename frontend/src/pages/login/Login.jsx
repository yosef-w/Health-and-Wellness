import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
// import LoginForm from '../../components/login/LoginForm';
import LoginImageDesign from '../../components/login/LoginImageDesign';
import './login.css'

export default function Login({ flashMessage, logUserIn }) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    try {
      let response = await fetch('http://127.0.0.1:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        console.log(data.message);
      }

      if (data.error) {
        flashMessage(data.error, 'danger');
      } else {
        // Get the token and token expiration from the response data
        console.log(data);
        let token = data.token;

        // Store the value in local storage on the browser
        localStorage.setItem('token', token);

        // Change the state of loggedIn to true
        logUserIn(true);

        // flash a success message and redirect
        flashMessage('You have successfully logged in', 'success');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="container-fluid">
    <div class="row">
    <div className="col-md-6 order-last order-md-first">
      <div className="d-lg-flex half">
        <div className="container">
          <div id="login-form" className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                <strong>Welcome!</strong>
              </h3>
              <p className="mb-4">Glad your back! Please enter your details:</p>
              <button className="btn btn-block btn-outline-dark">
                <FcGoogle size={30} className="mr-2"/>
                <span>Login with Google</span>
              </button>
              <div
                className="d-flex my-5"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  style={{
                    borderBottom: "2px solid white",
                    width: "45%",
                  }}
                />
                <span style={{ marginTop: "-10px", marginBottom: "-10px" }}>or</span>
                <div
                  style={{
                    borderBottom: "2px solid white",
                    width: "45%",
                  }}
                />
              </div>
              <form action="#" onSubmit={handleLogin}>
                <div className="form-group first">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    id="email"
                  />
                </div>
                <div className="form-group last mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0">
                    <input type="checkbox" defaultChecked="" className='checkbox'/>
                    <span className="caption">Remember me</span>
                    <div className="control__indicator" />
                  </label>
                  <span className="ml-auto">
                    <a href="/#" className="forgot-pass">
                      Forgot Password
                    </a>
                  </span>
                </div>
                <button className="btn btn-block btn-outline-dark">
                Submit
              </button>
              </form>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Don't have an account?
                <a href='/register'>
                <strong style={{ color: "black", cursor: "pointer" }}>
                  Sign up for free
                </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
        <img src="./assets/ian-keefe-NBQhCKtg_9Y-unsplash.jpg" alt="" />
    </div>
    </div>
    </div>
  );
};