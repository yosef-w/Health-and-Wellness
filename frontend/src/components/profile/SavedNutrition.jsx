import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NutritionDisplay() {
  const [nutritionList, setNutritionList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/nutrition/saved')
      .then(response => setNutritionList(response.data));
  }, []);

  const handleDelete = (nutrition) => {
    axios
      .delete('http://127.0.0.1:5000/nutrition/delete', { data: { name: nutrition.name } })
      .then(response => {
        console.log(response.data.message);
        // Reload the nutrition list after deleting the instance
        axios.get('http://127.0.0.1:5000/nutrition/saved')
          .then(response => setNutritionList(response.data));
      })
      .catch(error => console.error(error));
  }
      
  return (
    <div>
      {nutritionList.map(nutrition => (
        <div key={nutrition.id} className="card nutritioncard">
          <div className="row">
            <div className="col-md-3" style={{width: "350px", height: "350px"}}>
            <img className="card-img-top" src={nutrition.image} alt={nutrition.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Name: {nutrition.name}</strong></li>
                  <li className="list-group-item">Cuisine Type: {nutrition.cuisine}</li>
                  <li className="list-group-item">Calories: {nutrition.calories}</li>
                  <li className="list-group-item">Carbohydrates: {nutrition.carbohydrates}</li>
                  <li className="list-group-item">Protein: {nutrition.protein}</li>
                  <li className="list-group-item">Fats: {nutrition.fats}</li>
                </ul>
                <button href="#" class="btn btn-danger" style={{width: "110px", height: "40px", margin: "0px", backgroundColor: "#dc3545", border: "none"}} onClick={() => handleDelete(nutrition)}>Delete</button>
                <button href="#" class="btn btn-primary" style={{width: "100px", height: "40px", margin: "0px 0px 0px 30px", backgroundColor: "#007bff", border: "none"}}>Keep</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
