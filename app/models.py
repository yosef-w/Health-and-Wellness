import base64
import os
from app import db, login 
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    # first_name = db.Column(db.String(50), nullable=False)
    # last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(75), nullable=False, unique=True)
    email = db.Column(db.String(75), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    nutrition = db.relationship('Nutrition', backref='author')
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.password = generate_password_hash(kwargs.get('password'))
        self.get_token()
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f"<User {self.id} | {self.username}>"
    
    def check_password(self, password_guess):
        return check_password_hash(self.password, password_guess)
    
    def get_token(self, expires_in=3600):
        now = datetime.utcnow()
        if self.token and self.token_expiration > now + timedelta(minutes=1):
            return self.token
        self.token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)
        print(self.token)
        db.session.commit()
        return self.token
    
@login.user_loader
def get_a_user_by_id(user_id):
    return db.session.get(User, user_id)


class Nutrition(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(300))
    name = db.Column(db.String(50), nullable=False)
    cuisine = db.Column(db.String(50), nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    carbohydrates = db.Column(db.Integer, nullable=False)
    protein = db.Column(db.Integer, nullable=False)
    fats = db.Column(db.Integer, nullable=False)
    recipe = db.Column(db.String(300), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f"<Nutrition {self.id}|{self.name}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'image': self.image,
            'name': self.name,
            'cuisine': self.cuisine,
            'calories': self.calories,
            'carbohydrates': self.carbohydrates,
            'protein': self.protein,
            'fats': self.fats,
            'recipe': self.recipe
        }
    

class Symptom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symptom1 = db.Column(db.String(100), nullable=False)
    symptom2 = db.Column(db.String(100), nullable=False)
    symptom3 = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        return {
            'symptom1': self.symptom1,
            'symptom2': self.symptom2,
            'symptom3': self.symptom3
        }


class Vitals(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first = db.Column(db.String(100), nullable=False)
    last = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    systolic = db.Column(db.Integer, nullable=False)
    diastolic = db.Column(db.Integer, nullable=False)
    activity = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        return {
            "id": self.id,
            "first": self.first,
            "last": self.last,
            "age": self.age,
            "weight": self.weight,
            "height": self.height,
            "systolic": self.systolic,
            "diastolic": self.diastolic,
            "activity": self.activity,
        }