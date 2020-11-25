from flask import Flask, jsonify, request 
from flask_cors import CORS 
import pymongo 
import json
from bson import ObjectId

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


@app.route('/historiales', methods=['GET']) 
def findAllHistoriales(): 
    query = historiales.find() 
    output = {} 
    i = 0
    for x in query: 
        output[i] = x 
        output[i].pop('_id') 
        i += 1
    return JSONEncoder().encode(output)
@app.route('/arquetipos', methods=['GET']) 
def findAllArquetipos(): 
    query = arquetipos.find() 
    output = {} 
    i = 0
    for x in query: 
        output[i] = x 
        output[i].pop('_id') 
        i += 1
    return JSONEncoder().encode(output)

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

if __name__ == '__main__': 
    app.run(debug=True) 