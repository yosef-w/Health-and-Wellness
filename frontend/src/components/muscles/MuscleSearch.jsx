import React, { useState } from 'react';
import axios from 'axios';
import MuscleDisplay from './MuscleDisplay';

export default function MuscleSearch() {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const muscle = event.target.muscle.value;
    setMuscleGroups([muscle]);
    setSearched(true);
  };

  return (
    <div>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <h1 style={{ marginTop: "50px" }}>Muscle Groups</h1>
          <div
            id="muscle-search"
            className="input-group"
            style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}
          >
            <input
              type="text"
              name="muscle"
              className="form-control"
              placeholder="Muscles affected"
              style={{ height: "60px" }}
            />
            <button
              className="btn btn-dark"
              type="submit"
              style={{
                height: "60px",
                marginTop: "20px",
                maxWidth: "200px",
                backgroundColor: 'black'
              }}
            >
              Search
            </button>
          </div>
        </form>
        {searched && (
          <MuscleDisplay muscleGroups={muscleGroups} />
        )}
      </div>
    </div>
  );
}
