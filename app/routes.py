from app import app, db
from flask import flash
from app.forms import SignUpForm, LoginForm
from app.models import User
from flask_login import login_user, logout_user, login_required, current_user

@app.route('/')
def index():
    return "Hello World"

