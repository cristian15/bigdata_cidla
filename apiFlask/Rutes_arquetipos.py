from ConexionDB import app, arquetipos
from bson import ObjectId
import json
 

@app.route('/arquetipos', methods=['GET']) 
def findAllArquetipos(): 
    query = arquetipos.find()[0] 
    output = {} 
    i = 0
    print(query)
    for x in query: 
        output[i] = x 
        #output[i].pop('_id') 
        i += 1
    return JSONEncoder().encode(output)

# Convierte a JSON 
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)