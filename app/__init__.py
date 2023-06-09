from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

app.config.from_object(Config)

CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from app.blueprints.user import bp
app.register_blueprint(bp)


from app.blueprints.nutrition import bp 
app.register_blueprint(bp)


from app.blueprints.symptom import bp2 
app.register_blueprint(bp2)

from app import routes, models