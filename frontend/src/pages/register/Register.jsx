import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./register.css"

export default function Register({ flashMessage }) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const handleUsernameChange = event =>  {
        setUsername(event.target.value)};

    const handleEmailChange = event => {
        setEmail(event.target.value)};

    const handlePasswordChange = event => {
        setPassword(event.target.value)};
    
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value)};

    const handleRegister = event => {
        event.preventDefault();
        console.log(event);
        if (password !== confirmPassword) {
            flashMessage('Passwords do not match', 'warning');
        } else{
            // Make the Post Request to Flask API
            console.log('Passwords do match! Hooray!!')

            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username: username,
                email: email,
                password: password
            })
            console.log(formData);
            // make a post request to the backend
            fetch('http://127.0.0.1:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        flashMessage(data.error, 'danger');
                    } else {
                        flashMessage(`${data.username} has been created`, 'success');
                        navigate('/vitals');
                    }
                })
        }
    }

    return (
        <>
          <title>Sign Up</title>
          <div className="container signup">
            <div className="row">
              <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <form onSubmit={handleRegister}>
                  <h1 id='signup' style={{textAlign: "center"}}>Sign Up</h1>
                  <div>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <button className="btn btn-block btn-outline-dark">
                Submit
              </button>
                </form>
                <p style={{marginBottom: "50px"}}>Or Sign Up With Social Platforms</p>
                <div className="w-75 d-flex justify-content-between mt-4" style={{marginBottom: "250px"}}>
                  <FaFacebook size={30} />
                  <FaTwitter size={30} />
                  <FcGoogle size={30} />
                  <FaGithub size={30} />
                </div>
              </div>
              <div className="col-6 position-relative">
                <img 
                src="./assets/signup.jpg" 
                alt="" 
                style={{
                    position: "",
                    width: "100%",
                    height: "100%"
                }}
                />
            </div>
            </div>
          </div>
        </>
      );
    }
    