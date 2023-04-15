import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./register.css"

export default function Register({ flashMessage }) {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event);
        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;
        if (password !== confirmPass){
            flashMessage('Passwords do not match', 'warning');
        } else{
            // Make the Post Request to Flask API
            console.log('Passwords do match! Hooray!!')

            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                email: event.target.email.value,
                username: event.target.username.value,
                password
            })

            fetch('https://kekambas-blog-api.onrender.com/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        flashMessage(data.error, 'danger');
                    } else {
                        flashMessage(`${data.username} has been created`, 'success');
                        navigate('/');
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
                        <h1 className="display-2 mb-5">Sign Up</h1>
                        <div className="form-floating">
                            <i className="icon fa-regular fa-user" />
                            <input
                                type="text"
                                name=""
                                id="user"
                                placeholder="Username"
                                className="form-control"
                            />
                            <label htmlFor="user">Username</label>
                        </div>
                        <div className="form-floating">
                            <i className="icon fa-regular fa-envelope" />
                            <input
                                type="text"
                                name=""
                                id="email"
                                placeholder="Email"
                                className="form-control"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating">
                            <i className="icon fa-solid fa-lock" />
                            <input
                                type="text"
                                name=""
                                id="password"
                                placeholder="Password"
                                className="form-control"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating">
                            <i className="icon fa-solid fa-lock" />
                            <input
                                type="text"
                                name=""
                                id="password"
                                placeholder="Password"
                                className="form-control"
                            />
                            <label htmlFor="password">Confirm Password</label>
                        </div>
                        <button>Sign Up</button>
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