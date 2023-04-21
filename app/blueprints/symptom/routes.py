from flask import request, jsonify
from app import db
from . import bp2
from flask_login import current_user
from app.models import Symptom

@bp2.route('/info', methods=['POST'])
def add_symptom():
    if not request.is_json:
        return jsonify({'error': 'Your request content-type must be application/json'}), 400

    data = request.json
    # Validate that all of the required fields are present
    required_fields = ['symptom1', 'symptom2', 'symptom3']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return jsonify({'error': f"{', '.join(missing_fields)} must be in the request body"}), 400

    # Get the data from the request body
    symptom1 = data['symptom1']
    symptom2 = data['symptom2']
    symptom3 = data['symptom3']


    new_symptoms = Symptom(
        symptom1=symptom1,
        symptom2=symptom2,
        symptom3=symptom3
    )

    db.session.add(new_symptoms)
    db.session.commit()

    return jsonify(new_symptoms.to_dict()), 201

@bp2.route('/saved', methods=['GET'])
def get_symptoms():
    symptoms = Symptom.query.all()
    return jsonify([symptom.to_dict() for symptom in symptoms]), 200

@bp2.route('/delete', methods=['DELETE'])
def delete_symptom():
    if not request.is_json:
        return jsonify({'error': 'Your request content-type must be application/json'}), 400

    data = request.json
    if 'symptom1' not in data:
        return jsonify({'error': 'The request body must contain symptom1 to delete'}), 400

    symptom1 = data['symptom1']

    symptom = Symptom.query.filter_by(symptom1=symptom1).first()
    if not symptom:
        return jsonify({'error': f"No symptoms found with the name '{symptom1}'"}), 404

    db.session.delete(symptom)
    db.session.commit()

    return jsonify({'message': f"{symptom1} was deleted successfully"}), 200