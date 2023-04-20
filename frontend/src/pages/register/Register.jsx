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
    
    const handleConfirmPassword = event => {
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
            <div className="container">
                <div className="row">
                    <div
                        className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
                        id="content"
                    >
                    <form action="" onSubmit={handleRegister}>
                        <h1 className="display-2 mb-5">Sign Up</h1>
                        <div className="form-floating">
                            {/* <i className="icon fa-regular fa-user" /> */}
                            <input
                                type="text"
                                name="username"
                                id="user"
                                placeholder="Username"
                                className="form-control"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <label htmlFor="user">Username</label>
                        </div>
                        <div className="form-floating">
                            {/* <i className="icon fa-regular fa-envelope" /> */}
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="form-control"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating">
                            {/* <i className="icon fa-solid fa-lock" /> */}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating">
                            {/* <i className="icon fa-solid fa-lock" /> */}
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <button>Sign Up</button>
                        </form>
                        <p>Or Sign Up With Social Platforms</p>
                        <div className="w-75 d-flex justify-content-between mt-4">
                            <FaFacebook size={30}/>
                            <FaTwitter size={30}/>
                            <FcGoogle size={30}/>
                            <FaGithub size={30}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src="/assets/Elegant and Minimalist Medical Logo.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};