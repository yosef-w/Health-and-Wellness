import React from 'react'
import axios from 'axios'

export default function SymptomForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    let symptom = event.target.symptom.value;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('X-RapidAPI-Key', 'b6486a2244msh6b26351dc2d4ef3p1a6430jsna5b9d93cf69c');
    myHeaders.append('X-RapidAPI-Host', 'symptom-checker4.p.rapidapi.com');

    let paramList = {};
    paramList['symptoms'] = symptom;

    let formData = JSON.stringify(paramList);
    const response = await fetch('https://symptom-checker4.p.rapidapi.com/analyze', {
      method: 'POST',
      headers: myHeaders,
      params: formData
    });

    let answer = await response.json();

    if (answer.error) {
      flashMessage(answer.error, 'danger');
    } else {
      flashMessage('Your symptoms have been saved.', 'success');
    }
  }



    return (
        <div>
          <form action="" onSubmit={handleSubmit}>
                <h1 className="text-center">Symptoms</h1>
                <div className="form-">
                    {/* <label htmlFor="task">Enter task</label> */}
                    <input className="form-control" type="text" name="symptom" placeholder='What Symptoms Do You Have...' />
                    <input type="submit" value="Submit" className='btn btn-outline-primary w-100 mt-3' />
                </div>
            </form>
        </div>
      )
}
