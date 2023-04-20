import React, { useState } from 'react'
import NutritionForm from '../../components/nutrition/NutritionForm'
import NutritionDisplay from '../../components/nutrition/NutritionDisplay'
import "./nutrition.css"
import axios from 'axios'
import { GrCheckmark } from "react-icons/gr"

export default function Nutrition() {

    const [responseData, setResponseData] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        let food = event.target.food.value;

        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=3ddacc70&app_key=0517be6aba3a311e9833d08d58ab4938`);

        let responseData = response.data;
        console.log(responseData);
        setResponseData(responseData);
  }

  
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-center">Nutrition</h1>
          <div className="searchbar">
            <div className="form-floating">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input style={{height: "50px"}}
                    type="text"
                    name="food"
                    className="form-control"
                    placeholder="Enter your ingredients..."
                  />
              <div className="text-center">
                <button style={{width: "250px"}}className="btn btn-sm btn-dark" id="submit" type="submit">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button style={{ backgroundColor: "red", color: "white" }}>
  <i className="fas fa-times"></i>
</button>

<button style={{ backgroundColor: "green" }}>
  <span style={{ color: "white" }}>
    <GrCheckmark />
  </span>
</button>

<button style={{ backgroundColor: "blue", color: "white" }}>
  <i className="fas fa-arrow-right"></i>
</button>
      <NutritionDisplay responseData={responseData} />
    </>
  )
  
}
