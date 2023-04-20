from flask import request
from app import db
from . import bp
from flask_login import login_user
from app.models import User, Vitals

@bp.route('/register', methods=["POST"])
def create_user():
    # Check to see that the request body is JSON aka application/json content-type
    if not request.is_json:
        return {'error': 'Your request content-type must be application/json'}, 400
    # Get the data from the request body
    data = request.json
    # Validate that all of the required fields are present
    required_fields = ['username', 'email', 'password']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return {'error': f"{', '.join(missing_fields)} must be in the request body"}, 400
    # Get the data from the request body
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    # Check to see if there is already a user with that username and/or email
    check_user = db.session.execute(db.select(User).filter((User.username == username) | (User.email == email))).scalars().all()
    if check_user:
        return {'error': 'User with that username and/or email already exists'}, 400
    # Create a new user instance with the request data
    new_user = User(username=username, email=email, password=password)
    
    return {
        'id': new_user.id,
        'username': new_user.username,
        'email': new_user.email
    }, 201 


@bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.query.filter_by(username=username).first()

    if user is None or not user.check_password(password):
        return {'error': 'Invalid username or password'}, 401

    # If the username and password are correct, generate a new token to return
    token = user.get_token()
    return {'token': token}, 200


@bp.route('/vitals', methods=["POST"])
def add_vitals():
     # Check to see that the request body is JSON aka application/json content-type
    if not request.is_json:
        return {'error': 'Your request content-type must be application/json'}, 400
    # Get the data from the request body
    data = request.json
    # Validate that all of the required fields are present
    required_fields = ['first', 'last', 'age', 'weight', 'height', 'systolic', 'diastolic', 'activity']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return {'error': f"{', '.join(missing_fields)} must be in the request body"}, 400
    # Get the data from the request body
    first = data.get('first')
    last = data.get('last')
    age = data.get('age')
    weight = data.get('weight')
    height = data.get('height')
    systolic = data.get('systolic')
    diastolic = data.get('diastolic')
    activity = data.get('activity')

    new_vitals = Vitals(first=first, last=last, age=age, weight=weight, height=height, systolic=systolic, diastolic=diastolic, activity=activity)
    db.session.add(new_vitals)
    db.session.commit()

    
    return new_vitals.to_dict()

@bp.route('/vitals', methods=['GET'])
def get_vitals():
    vitals = Vitals.query.first()
    vitals_dict = vitals.to_dict()
    return vitals_dict


@bp.route('vitals', methods=['PUT'])
def update_vitals():
    data = request.get_json()
    first = data.get('first')
    last = data.get('last')
    age = data.get('age')
    weight = data.get('weight')
    height = data.get('height')
    systolic = data.get('systolic')
    diastolic = data.get('diastolic')
    activity = data.get('activity')

    vitals = Vitals.query.first()
    vitals.first = first
    vitals.last = last
    vitals.age = age
    vitals.weight = weight
    vitals.height = height
    vitals.systolic = systolic
    vitals.diastolic = diastolic
    vitals.activity = activity

    db.session.commit()

    return {'message': 'Vitals updated successfully'}