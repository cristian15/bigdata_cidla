from flask import Flask
from flask_cors import CORS 
import pymongo 

# URI de la conexion a la base de datos
connection_url = 'mongodb://root:toor123456@ds147267.mlab.com:47267/bigdata_cidla?retryWrites=true&w=majority'
app = Flask(__name__) 
cors = CORS(app)

client = pymongo.MongoClient(connection_url) 
# Database 
Database = client['bigdata_cidla'] 
# Colecciones 
arquetipos = Database.arquetipos 
historiales = Database.historiales_clinicos 
indices = Database.indices
test = Database.pruebas  