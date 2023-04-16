from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from datetime import datetime
from app.models import User

basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()

@basic_auth.verify_password
def verify(username, password):
    user = User.query.filter_by(username=username).first()
    if user is not None and user.check_password(password):
        return user

@basic_auth.error_handler
def handle_error(status):
    return {'error': 'Incorrect Username and/or Password'}, status


@token_auth.verify_token
def verify(token):
    print(token)
    user = User.query.filter_by(token=token).first()
    now = datetime.utcnow()
    if user is not None and user.token_expiration > now:
        return user

@token_auth.error_handler
def handle_error(status):
    return {'error': 'You must have a valid token to perform this action'}, status