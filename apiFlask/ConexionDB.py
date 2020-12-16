from flask import Flask
from flask_cors import CORS 
import pymongo 

# URI de la conexion a la base de datos
connection_url = 'mongodb://root:toor.12345@nubapp.cl:27017/admin?retryWrites=true&w=majority'
app = Flask(__name__) 
cors = CORS(app)

client = pymongo.MongoClient(connection_url) 
# Database 
Database = client['cidla'] 
# Colecciones 
arquetipos = Database.arquetipos 
historiales = Database.historiales
indices = Database.indices
test = Database.pruebas  