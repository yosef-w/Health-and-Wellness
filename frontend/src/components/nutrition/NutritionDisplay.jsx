export default function NutritionDisplay({ responseData }) {
    if (!responseData) {
      return null;
    }
  
    return (
      <div>
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
              Skip For Now
            </a>
            <a href="#" className="card-link">
              Save To Profile
            </a>
            <a href="#" className="card-link">
              More Info
            </a>
          </div>
        </div>
      </div>
    );
  }
  