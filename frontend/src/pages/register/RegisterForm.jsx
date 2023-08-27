import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./register.css"

export default function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log('Passwords do match! Hooray!!');
      const userData = {
        username: username,
        email: email,
        password: password
      };
      console.log(userData);

      fetch('http://127.0.0.1:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(`${data.username} has been created`);
          window.location.href = '/vitals';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log('An error occurred while registering');
      });
    }
  };

  return (
    <>
      <div className="col-md-6 order-last order-md-first">
        <div className="d-lg-flex half">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center mx-auto">
                  <form onSubmit={handleRegister}>
                    <h1 id="signup" style={{ textAlign: "center" }}>
                      Sign Up
                    </h1>
                    <div className="w-100">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        style={{ width: "100%" }}
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        style={{ width: "100%" }}
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        style={{ width: "100%" }}
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        style={{ width: "100%" }}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    <button className="btn btn-block btn-dark">
                      Submit
                    </button>
                  </form>
                  <p style={{ marginBottom: "50px" }}>
                    Or Sign Up With Social Platforms
                  </p>
                  <div
                    className="w-75 d-flex justify-content-between mt-4 mx-auto"
                    style={{ marginBottom: "250px" }}
                  >
                    <FaFacebook size={30} />
                    <FaTwitter size={30} />
                    <FcGoogle size={30} />
                    <FaGithub size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
