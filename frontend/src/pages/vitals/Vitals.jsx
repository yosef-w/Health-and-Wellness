import React from 'react';
import './vitals.css';
import { useNavigate } from 'react-router-dom';

export default function Vitals({ flashMessage }) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        try {
            event.preventDefault();
        
            const first = event.target.elements.first.value;
            const last = event.target.elements.last.value;
            const age = event.target.elements.age.value;
            const weight = event.target.elements.weight.value;
            const height = event.target.elements.height.value;
            const systolic = event.target.elements.systolic.value;
            const diastolic = event.target.elements.diastolic.value;
            const activity = event.target.elements.activity.value;
          
            const data = {
              first: first,
              last: last,
              age: age,
              weight: weight,
              height: height,
              systolic: systolic,
              diastolic: diastolic,
              activity: activity
            };
          
            const response = await fetch('http://127.0.0.1:5000/user/vitals', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (response.ok) {
              navigate('/dashboard');
            } else {
              console.log(responseData.message);
            }

            if (responseData.error) {
              flashMessage(responseData.error, 'danger');
            } else {
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
        <div className='card' id='vitals'>
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

              <label>Height (in inches):</label>
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
