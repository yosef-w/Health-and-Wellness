
export default function NutritionDisplay({ responseData }) {

  if (!responseData) {
    return null;
  }

  const nutritionData = {
    image: responseData.hits[0].recipe.image,
    name: responseData.hits[0].recipe.label,
    cuisine: responseData.hits[0].recipe.cuisineType.join(" "), // joining the list with a space
    calories: Math.round(responseData.hits[0].recipe.calories),
    carbohydrates: Math.round(responseData.hits[0].recipe.totalNutrients.CHOCDF.quantity),
    protein: Math.round(responseData.hits[0].recipe.totalNutrients.PROCNT.quantity),
    fats: Math.round(responseData.hits[0].recipe.totalNutrients.FAT.quantity),
    recipe: responseData.hits[0].recipe.url,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/nutrition/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nutritionData),
      });

      if (!response.ok) {
        throw new Error("Failed to save nutrition data");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row">
        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top w-" style ={{ width:"100%", height: "20rem" }}src={responseData.hits[0].recipe.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{responseData.hits[0].recipe.label}</h5>
            <p className="card-text">
              {responseData.hits[0].recipe.ingredientLines}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cuisine Type: {responseData.hits[0].recipe.cuisineType}</li>
            <li className="list-group-item">Calories: {Math.round(responseData.hits[0].recipe.calories)}</li>
            <li className="list-group-item">Carbohydrates: {Math.round(responseData.hits[0].recipe.totalNutrients.CHOCDF.quantity)}g</li>
            <li className="list-group-item">Protein: {Math.round(responseData.hits[0].recipe.totalNutrients.PROCNT.quantity)}g</li>
            <li className="list-group-item">Fats: {Math.round(responseData.hits[0].recipe.totalNutrients.FAT.quantity)}g</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Skip
            </a>
            <a href="#" className="card-link" onClick={handleSubmit}>
              Save
            </a>
            <a href={responseData.hits[0].recipe.url} className="card-link">
              Recipe
            </a>
          </div>
        </div>


        <div className="card" style={{ width: "22rem", marginRight: "20px", marginLeft: "20px" }}>
          <img className="card-img-top w-" style ={{ width:"100%", height: "20rem" }}src={responseData.hits[1].recipe.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{responseData.hits[1].recipe.label}</h5>
            <p className="card-text">
              {responseData.hits[1].recipe.ingredientLines}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cuisine Type: {responseData.hits[1].recipe.cuisineType}</li>
            <li className="list-group-item">Calories: {Math.round(responseData.hits[1].recipe.calories)}</li>
            <li className="list-group-item">Carbohydrates: {Math.round(responseData.hits[1].recipe.totalNutrients.CHOCDF.quantity)}g</li>
            <li className="list-group-item">Protein: {Math.round(responseData.hits[1].recipe.totalNutrients.PROCNT.quantity)}g</li>
            <li className="list-group-item">Fats: {Math.round(responseData.hits[1].recipe.totalNutrients.FAT.quantity)}g</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Skip
            </a>
            <a href="#" className="card-link" onClick={handleSubmit}>
              Save
            </a>
            <a href={responseData.hits[1].recipe.url} className="card-link">
              Recipe
            </a>
          </div>
        </div>



        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top w-" style ={{ width:"100%", height: "20rem" }}src={responseData.hits[2].recipe.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{responseData.hits[2].recipe.label}</h5>
            <p className="card-text">
              {responseData.hits[2].recipe.ingredientLines}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cuisine Type: {responseData.hits[2].recipe.cuisineType}</li>
            <li className="list-group-item">Calories: {Math.round(responseData.hits[2].recipe.calories)}</li>
            <li className="list-group-item">Carbohydrates: {Math.round(responseData.hits[2].recipe.totalNutrients.CHOCDF.quantity)}g</li>
            <li className="list-group-item">Protein: {Math.round(responseData.hits[2].recipe.totalNutrients.PROCNT.quantity)}g</li>
            <li className="list-group-item">Fats: {Math.round(responseData.hits[2].recipe.totalNutrients.FAT.quantity)}g</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Skip
            </a>
            <a href="#" className="card-link" onClick={handleSubmit}>
              Save
            </a>
            <a href={responseData.hits[2].recipe.url} className="card-link">
              Recipe
            </a>
          </div>
        </div>
        </div>
      </div>
    );
  }