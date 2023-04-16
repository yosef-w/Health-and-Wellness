from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from app.blueprints.user import bp
app.register_blueprint(bp)

from app import routes, models