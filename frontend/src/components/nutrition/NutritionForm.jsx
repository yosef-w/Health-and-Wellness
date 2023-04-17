import React from 'react';

export default function NutritionForm() {

    const handleFormSubmit = event => {
        // Prevent the form from making a new request
        event.preventDefault();
        // Get the input value from the form
        const food = event.target.food.value;
        // Call the updatePoke function from parent component to change state and rerender component
        // addFood(foodData);
        // Set the input back to empty
        event.target.food.value = ''
    };

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <h1 className="text-center">Symptoms</h1>
        <div className="form-group">
          {/* <label htmlFor="task">Enter task</label> */}
          <input className="form-control" type="text" name="food" placeholder='Please Add Your Food Ingredients...' />
          <input type="submit" value="Submit" className='btn btn-outline-primary w-100 mt-3' />
        </div>
      </form>
    </div>
  )
}
