from flask import request
from app import db
from . import bp
from app.models import Nutrition

@bp.route('/info', methods=["POST"])
def add_nutrition():
    # Check to see that the request body is JSON aka application/json content-type
    if not request.is_json:
        return {'error': 'Your request content-type must be application/json'}, 400
    # Get the data from the request body
    data = request.json
    # Validate that all of the required fields are present
    required_fields = ['image', 'name', 'cuisine_type', 'calories', 'carbohydrates', 'protein', 'fats', 'recipe']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return {'error': f"{', '.join(missing_fields)} must be in the request body"}, 400
    # Get the data from the request body
    image = data.get('image')
    name = data.get('name')
    cuisine_type = data.get('cuisine_type')
    calories = data.get('calories')
    carbohydrates = data.get('carbohydrates')
    protein = data.get('protein')
    fats = data.get('fats')
    recipe = data.get('recipe')

    new_nutrition = Nutrition(image=image, name=name, cuisine_type=cuisine_type, calories=calories, carbohydrates=carbohydrates, protein=protein, fats=fats, recipe=recipe)

        
    return {
        'id': new_nutrition.id,
        'image': new_nutrition.image,
        'name': new_nutrition.name,
        'cuisine_type': new_nutrition.cuisine_type,
        'calories': new_nutrition.calories,
        'carbohydrates': new_nutrition.carbohydrates,
        'protein': new_nutrition.protein,
        'fats': new_nutrition.fats,
        'recipe': new_nutrition.recipe
    }, 201