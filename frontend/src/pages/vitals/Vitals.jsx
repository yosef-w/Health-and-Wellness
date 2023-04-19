import React from 'react';
import './vitals.css';
import { useNavigate } from 'react-router-dom';

export default function Vitals({ flashMessage }) {
const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const vitals = {
      first: event.target.first.value,
      last: event.target.last.value,
      age: event.target.age.value,
      weight: event.target.weight.value,
      height: event.target.height.value,
      systolic: event.target.systolic.value,
      diastolic: event.target.diastolic.value,
      activity: event.target.activity.value,
    };

    try {
        let response = await fetch('http://127.0.0.1:5000/user/vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ vitals }),
        });
        const data = await response.json();
        if (response.ok) {
          navigate('/dashboard');
        } else {
          console.log(data.message);
        }
  
        if (data.error) {
          flashMessage(data.error, 'danger');
        } else {
  
          // flash a success message and redirect
          flashMessage('Information has been saved!', 'success');
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='title'>
      <h1>Vitals</h1>
      <div className='card'>
        <h5>Please provide more information about yourself below! This data will be saved to your profile:</h5>
        <hr></hr>

        <div className='information'>
          <form className='text-center' onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type='text' name='first' />

            <label>Last Name:</label>
            <input type='text' name='last' />

            <label>Age:</label>
            <input type='text' name='age' />

            <label>Weight (in pounds):</label>
            <input type='text' name='weight' />

            <label>Height (in meters):</label>
            <input type='text' name='height' />

            <label>Systolic blood pressure (mmHg):</label>
            <input type='text' name='systolic' />

            <label>Diastolic blood pressure (mmHg):</label>
            <input type='text' name='diastolic' />

            <label>Activity level:</label>
            <select name='activity' required>
              <option value=''>Please select</option>
              <option value='Sedentary'>Sedentary</option>
              <option value='Moderate'>Moderate</option>
              <option value='Active'>Active</option>
            </select>

            <button id='submit' className='btn btn-block btn-outline-dark' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
