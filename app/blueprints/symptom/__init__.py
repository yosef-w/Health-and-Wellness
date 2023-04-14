from flask import Blueprint

bp = Blueprint('symptom', __name__, url_prefix='symptom')

from . import routes