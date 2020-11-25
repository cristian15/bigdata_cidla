from flask import Flask, jsonify, request 
from flask_cors import CORS 
import pymongo 
import json
from bson import ObjectId

connection_url = 'mongodb://root:toor123456@ds147267.mlab.com:47267/bigdata_cidla?retryWrites=true&w=majority'
app = Flask(__name__) 

client = pymongo.MongoClient(connection_url) 
#client = pymongo.MongoClient('ds147267.mlab.com', 47267, username='root', password='toor123456', authSource="admin")
# Database 
Database = client['bigdata_cidla'] 
# Table 
arquetipos = Database.arquetipos 
historiales = Database.historiales_clinicos 
indices = Database.indices  

# To find all the entries/documents in a table/collection, 
# find() function is used. If you want to find all the documents 
# that matches a certain query, you can pass a queryObject as an 
# argument. 
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