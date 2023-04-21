import React from 'react';

export default function SymptomDisplay({ symptomData, flashMessage }) {
  if (!symptomData) {
    return null;
  }

  const potentialCausesList = symptomData.potentialCauses.map((cause, index) => (
    <li key={index}>{cause}</li>
  ));

  const topSymptoms = {
    symptom1: symptomData.potentialCauses[0],
    symptom2: symptomData.potentialCauses[1],
    symptom3: symptomData.potentialCauses[2]
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/symptom/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topSymptoms),
      });

      if (!response.ok) {
        flashMessage("Failed to save symptom data.", "danger");
      } else {
        flashMessage("Symptom data saved successfully!", "success");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container mt-5'style={{ marginBottom: "100px"}}>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <div className='card text-center'>
            <div className='card-body'>
              <h5 className='card-title'>Potential Causes:</h5>
              <ol style={{listStyleType: 'none', paddingInlineStart: '0px'}}>{potentialCausesList}</ol>
              <div className='row justify-content-center m-0'>
                <div className='col-lg-4' >
                  <button className='btn btn-danger w-100' onClick={(event) => { event.preventDefault(); }}>
                    Not Likely
                  </button>
                </div>
                <div className='col-lg-4'>
                  <button className='btn btn-success w-100' onClick={handleSubmit}>
                    Save to Profile
                  </button>
                </div>
                <div className='col-lg-4'>
                  <button className='btn btn-primary w-100' onClick={(event) => { event.preventDefault(); }}>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }  
