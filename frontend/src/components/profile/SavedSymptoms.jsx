import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SavedSymptoms() {
  const [symptomList, setSymptomList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/symptom/saved')
      .then(response => setSymptomList(response.data));
  }, []);

  const handleDelete = (symptom) => {
    axios
      .delete('http://127.0.0.1:5000/symptom/delete', { data: { symptom1: symptom.symptom1 } })
      .then(response => {
        console.log(response.data.message);
        // Reload the symptom list after deleting the instance
        axios.get('http://127.0.0.1:5000/symptom/saved')
          .then(response => setSymptomList(response.data));
      })
      .catch(error => console.error(error));
  }
  return (
    <div>
      {symptomList.map(symptom => (
        <div key={symptom.id} id="symptom-card" className="card m-5" style={{width: "400px"}}>
          <div className="card-body">
            <h4 className="card-title">Potential Causes:</h4>
            <h6 className="card-text">{symptom.cause}</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{symptom.symptom1}</li>
              <li className="list-group-item">{symptom.symptom2}</li>
              <li className="list-group-item">{symptom.symptom3}</li>
            </ul>
            <button id="delete" href="#" className="btn btn-danger" onClick={() => handleDelete(symptom)}>Delete</button>
            <button id="research" href="#" className="btn btn-primary">Research</button>
          </div>
        </div>
      ))}
    </div>
  )
}

