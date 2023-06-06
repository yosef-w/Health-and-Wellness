import React, { useState } from 'react'
import SymptomDisplay from '../../components/symptom/SymptomDisplay'
// import SymptomForm from '../../components/symptom/SymptomForm'
import axios from 'axios';
import './symptom.css'

export default function Symptom({ flashMessage }) {
  const [symptomData, setSymptomData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // https://theodorusclarence.com/blog/react-loading-state-pattern

  async function handleSubmit(event) {
    event.preventDefault();
    const symptom = event.target.symptom.value;

    const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'b6486a2244msh6b26351dc2d4ef3p1a6430jsna5b9d93cf69c',
      'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
    };

    const data = { symptoms: symptom };

    try {
      setIsLoading(true); // set loading state
      const response = await axios.post('https://symptom-checker4.p.rapidapi.com/analyze', data, { headers });
      console.log(response);
      const answer = response.data;

      if (answer.error) {
        flashMessage(answer.error, 'danger');
      } else {
        setSymptomData(answer);
        flashMessage('Potential causes have been found!', 'success');
      }
    } catch (error) {
      console.error(error);
      flashMessage('There was an error processing your symptoms. Please try again.', 'danger');
    } finally {
      setIsLoading(false); // reset loading state
    }
  }

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-center" style={{marginTop: "50px"}}>Symptoms</h1>
          <div className="searchbar">
            <div className="form-floating">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                style={{height: "50px"}}
                type="text"
                name="symptom"
                className="form-control"
                placeholder="Enter your symptoms..."
              />
              <div className="text-center">
                <button
                  style={{width: "250px"}}
                  className="btn btn-sm btn-dark"
                  id="submit"
                  type="submit"
                  disabled={isLoading} // disable button when loading
                >
                  {isLoading ? "Loading..." : "Search"} {/* show loading text or "Search" */}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SymptomDisplay symptomData={symptomData} flashMessage={flashMessage}/>
      <div id="spacer"></div>
    </div>
  )
}
