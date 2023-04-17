import React from 'react'

export default function SymptomDisplay({ symptomData }) {
    if (!symptomData) {
        return null;
      }

      const potentialCausesList = symptomData.potentialCauses.map((cause, index) => (
        <li key={index}>{cause}</li>

    ));

    return (
        <div className='row mt-5'>
            <div className="col-12 col-lg-6 offset-lg-3">
                <div className="card mb-3">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Response</h5>
                            <ul>{potentialCausesList}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}