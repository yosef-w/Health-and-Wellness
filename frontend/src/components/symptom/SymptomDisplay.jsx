import React from 'react';

export default function SymptomDisplay({ symptomData, flashMessage }) {
  if (!symptomData) {
    return null;
  }

  const handleSubmit = async (cause) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/symptom/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cause),
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

  const symptomCards = symptomData.potentialCauses.map((cause, index) => (
    <div className='col-lg-8 my-3' key={index}>
      <div className='card text-center'>
        <div className='card-body'>
          <div className="d-flex align-items-center justify-content-between">
            <p className="symptom-text" style={{ fontSize: '18px' }}>{cause}</p>
            <div>
              <button className='btn btn-danger' onClick={(event) => { event.preventDefault(); }}>
                <span role="img" aria-label="Remove">❌</span>
              </button>
              <button className='btn btn-success' onClick={() => handleSubmit(cause)}>
                <span role="img" aria-label="Save">✅</span>
              </button>
              <button className='btn btn-primary info-button' onClick={(event) => { event.preventDefault(); }}>
                <span role="img" aria-label="More Info" style={{ color: 'blue' }}>❓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='container mt-5' style={{ marginBottom: "100px" }}>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h2 className='text-center mb-4'>Potential Symptoms</h2>
        </div>
        <div className='col-lg-8'>
          {symptomCards}
        </div>
      </div>
    </div>
  );
}
