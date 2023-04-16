from app import app, db
from flask import flash
from app.forms import SignUpForm, LoginForm
from app.models import User
from flask_login import login_user, logout_user, login_required, current_user

@app.route('/')
def index():
    return "Hello World"

# @app.route('/signup', methods=["GET", "POST"])
# def signup():
#     # Create an instance of the form (in the context of the current request)
#     form = SignUpForm()
#     # Check if the form was submitted and that all of the fields are valid
#     if form.validate_on_submit():
#         # If so, get the data from the form fields
#         print('Hooray our form was validated!!')
#         first_name = form.first_name.data
#         last_name = form.last_name.data
#         email = form.email.data
#         username = form.username.data
#         password = form.password.data
#         print(first_name, last_name, email, username, password)
#         # Check to see if there is already a user with either username or email
#         check_user = db.session.execute(db.select(User).filter((User.username == username) | (User.email == email))).scalars().all()
#         if check_user:
#             # Flash a message saying that user with email/username already exists
#             flash("A user with that username and/or email already exists", "warning")
#             return redirect(url_for('signup'))
#         # If check_user is empty, create a new record in the user table
#         new_user = User(first_name=first_name, last_name=last_name, email=email, username=username, password=password)
#         flash(f"Thank you {new_user.username} for signing up!", "success")
#         return redirect(url_for('index'))
#     return render_template('signup.html', form=form)
