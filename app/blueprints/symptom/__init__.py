from flask import Blueprint

bp2 = Blueprint('symptom', __name__, url_prefix='/symptom')

from . import routes