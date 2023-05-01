import React from 'react';
import axios from 'axios';
import './muscle.css'

export default function MuscleSearch() {

    async function handleSubmit(event) {
        event.preventDefault();
        let muscle = event.target.muscle.value;
      
        const options = {
          method: 'GET',
          url: 'https://muscle-group-image-generator.p.rapidapi.com/getImage',
          params: {
            muscleGroups: muscle,
            color: '200,100,80',
            transparentBackground: '0'
          },
          headers: {
            'X-RapidAPI-Key': 'b6486a2244msh6b26351dc2d4ef3p1a6430jsna5b9d93cf69c',
            'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com'
          }
        };
      
        try {
          const response = await axios.get(options.url, options);
          console.log(response.data);

        } catch (error) {
          console.error(error);

        }
      }
      
      

  return (
    <div>
        <div className="text-center">
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <h1 style={{marginTop: "50px"}}>Muscle Groups</h1>
                    <div id="muscle-search" className="input-group" style={{maxWidth: "500px", textAlign: "center"}}>
                    <input 
                        type="text"
                        name="muscle"
                        className="form-control"
                        placeholder="Muscles affected"
                        style={{height: "60px"}}
                    />
                    <button className="btn btn-dark" type="submit" style={{height: "60px", marginTop: "20px", maxWidth: "200px"}}>Search</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
  )
};
