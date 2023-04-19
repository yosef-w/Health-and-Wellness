from flask import request, jsonify
from app import db
from . import bp
from flask_login import current_user
from app.models import Nutrition

@bp.route('/info', methods=['POST'])
def add_nutrition():
    if not request.is_json:
        return jsonify({'error': 'Your request content-type must be application/json'}), 400

    data = request.json
    # Validate that all of the required fields are present
    required_fields = ['image', 'name', 'cuisine', 'calories', 'carbohydrates', 'protein', 'fats', 'recipe']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return jsonify({'error': f"{', '.join(missing_fields)} must be in the request body"}), 400

    # Get the data from the request body
    image = data['image']
    name = data['name']
    cuisine = data['cuisine']
    calories = data['calories']
    carbohydrates = data['carbohydrates']
    protein = data['protein']
    fats = data['fats']
    recipe = data['recipe']


    new_nutrition = Nutrition(
        image=image,
        name=name,
        cuisine=cuisine,
        calories=calories,
        carbohydrates=carbohydrates,
        protein=protein,
        fats=fats,
        recipe=recipe,
    )

    db.session.add(new_nutrition)
    db.session.commit()

    return jsonify(new_nutrition.to_dict()), 201
