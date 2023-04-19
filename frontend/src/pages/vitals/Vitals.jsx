import React from 'react'
import "./vitals.css"

export default function Vitals() {
  return (
    <div className='title'>
        <h1>Vitals</h1>
      <div className="card">

      <h5>Please provide more information about yourself below! This data will be saved to your profile:</h5>
      <hr></hr>

  <div className="information">

    <form className='text-center'>
        <label>First Name:</label>
        <input type="text" name="first"/>

        <label>Last Name:</label>
        <input type="text" name="last"/>

        <label>Age:</label>
        <input type="text" name="age"/>

        <label>Weight (in pounds):</label>
        <input type="text" name="weight"/>

        <label>Height (in meters):</label>
        <input type="text" name="height"/>

        <label>Systolic blood pressure (mmHg):</label>
        <input type="text" name="systolic_bp"/>

        <label>Diastolic blood pressure (mmHg):</label>
        <input type="text" name="diastolic_bp"/>

        <label>Activity level:</label>
        <select name="activity_level" required>
            <option value="">Please select</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Moderate">Moderate</option>
            <option value="Active">Active</option>
        </select>

        <button id= "submit" className="btn btn-block btn-outline-dark">
            Submit
        </button>
    </form>

  </div>
</div>
    </div>
  )
}
