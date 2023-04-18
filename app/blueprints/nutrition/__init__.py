from flask import Blueprint

bp = Blueprint('nutrition', __name__, url_prefix='nutrition')

from . import routes