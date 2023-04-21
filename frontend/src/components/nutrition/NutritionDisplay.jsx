import React, { useState } from "react";

export default function NutritionDisplay({ responseData, flashMessage }) {
  const [hitIndex, setHitIndex] = useState(0);

  if (!responseData) {
    return null;
  }

  const handleSubmit = async (event, index) => {
    event.preventDefault();

    const hit = responseData.hits[index];
    const nutritionData = {
      image: hit.recipe.image,
      name: hit.recipe.label,
      cuisine: hit.recipe.cuisineType.join(" "),
      calories: Math.round(hit.recipe.calories),
      carbohydrates: Math.round(hit.recipe.totalNutrients.CHOCDF.quantity),
      protein: Math.round(hit.recipe.totalNutrients.PROCNT.quantity),
      fats: Math.round(hit.recipe.totalNutrients.FAT.quantity),
      recipe: hit.recipe.url
    };

    try {
      setHitIndex(index);
      const response = await fetch("http://127.0.0.1:5000/nutrition/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nutritionData),
      });

      if (!response.ok) {
        flashMessage("Failed to save nutrition data.", "danger");
      } else {
        flashMessage("Nutrition data saved successfully!", "success");
      }

      const responseData = await response.json();
      console.log(responseData);
      console.log(index);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="d-flex justify-content-center">
      {responseData.hits.slice(0, 3).map((hit, index) => (
        <div className="card" style={{ width: "22rem", marginRight: "20px", marginLeft: "20px" }} key={index}>
          <img className="card-img-top w-" style={{ width: "100%", height: "20rem" }} src={hit.recipe.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{hit.recipe.label}</h5>
            <p className="card-text">
              {hit.recipe.ingredientLines}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cuisine Type: {hit.recipe.cuisineType}</li>
            <li className="list-group-item">Calories: {Math.round(hit.recipe.calories)}</li>
            <li className="list-group-item">Carbohydrates: {Math.round(hit.recipe.totalNutrients.CHOCDF.quantity)}g</li>
            <li className="list-group-item">Protein: {Math.round(hit.recipe.totalNutrients.PROCNT.quantity)}g</li>
            <li className="list-group-item">Fats: {Math.round(hit.recipe.totalNutrients.FAT.quantity)}g</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Skip
            </a>
            <a href="#" className="card-link" onClick={(e) => handleSubmit(e, index)}>
              Save
            </a>
            <a href={hit.recipe.url} className="card-link">
              Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
