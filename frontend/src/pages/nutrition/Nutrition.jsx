import React, { useState } from 'react'
import NutritionForm from '../../components/nutrition/NutritionForm'
import NutritionDisplay from '../../components/nutrition/NutritionDisplay'
import axios from 'axios'

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
        <div className="form-group">
          {/* <label htmlFor="task">Enter task</label> */}
          <input className="form-control w-50" type="text" name="food" placeholder='Please Add Your Food Ingredients...' />
          <input type="submit" value="Submit" className='btn btn-outline-primary w-50 mt-3' />
        </div>
      </form>
    </div>
    <NutritionDisplay responseData={responseData}/>
    </>
  )
}
