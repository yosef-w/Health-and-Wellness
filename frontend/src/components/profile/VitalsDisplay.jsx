import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import axios from 'axios';

export default function VitalsDisplay({ flashMessage }) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/user/vitals')
      .then((response) => {
        const data = response.data;
        const userVitals = data;
        setUserData({
          firstName: userVitals.first,
          lastName: userVitals.last,
          age: userVitals.age,
          weight: userVitals.weight,
          height: userVitals.height,
          systolic: userVitals.systolic,
          diastolic: userVitals.diastolic,
          activityLevel: userVitals.activity,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function handleSubmit(event) {
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
      activity: activity,
    };

    try {
      let response = await axios.put('http://127.0.0.1:5000/user/vitals', data);

      let new_data = response.data;

      if (new_data.error) {
        flashMessage(new_data.error, 'danger');
      } else {
        flashMessage(`Profile has been updated`, 'success');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
      <div>
<div className="card p-4 m-3">
  <form onSubmit={handleSubmit}>
    <h2>User Information</h2>
    <div className="row g-3">
      <div className="col-md-4">
        <label>First Name:</label>
        <input type="text" name='first' className="form-control" defaultValue={userData?.firstName}/>
      </div>
      <div className="col-md-4">
        <label>Last Name:</label>
        <input type="text" name='last' className="form-control" defaultValue={userData?.lastName}/>
      </div>
      <div className="col-md-2">
        <label>Age:</label>
        <input type="text" name='age' className="form-control" defaultValue={userData?.age}/>
      </div>
      <div className="col-md-2">
        <label>Weight:</label>
        <input type="text" name='weight' className="form-control" defaultValue={userData?.weight}/>
      </div>
      <div className="col-md-2">
        <label>Height:</label>
        <input type="text" name='height' className="form-control" defaultValue={userData?.height}/>
      </div>
      <div className="col-md-2">
        <label>Systolic:</label>
        <input type="text" name='systolic' className="form-control" defaultValue={userData?.systolic}/>
      </div>
      <div className="col-md-2">
        <label>Diastolic:</label>
        <input type="text" name='diastolic' className="form-control" defaultValue={userData?.diastolic}/>
      </div>
      <div className="col-md-4">
        <label id="activity">Activity:</label>
        <select id='activity-form' name='activity' className="form-select" defaultValue={userData?.activityLevel}>
          <option disabled value=''>Please select</option>
          <option value='Sedentary'>Sedentary</option>
          <option value='Moderate'>Moderate</option>
          <option value='Active'>Active</option>
        </select>
      </div>
    </div>
    <button id='update-button' type="submit" className="btn btn-primary mt-2">Update Information</button>
  </form>
</div>
      </div>
    )
  }