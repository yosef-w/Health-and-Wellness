import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className='row'>
      <div className='col'>
        <div className='card mt-3'>
          <div className='card-header text-center'>Log In Here!</div>
          <div className='card-body'>
            <form action='' onSubmit={handleLogin}>
              <div className='form-group'>
                <input type='text' name='username' className='form-control my-3' placeholder='Enter Username' />
                <input type='password' name='password' className='form-control my-3' placeholder='Enter Password' />
                <input type='submit' value='Log In' className='btn btn-success w-100' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}