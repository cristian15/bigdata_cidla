from ConexionDB import app, arquetipos
from bson import ObjectId
import json

@app.route('/arquetipos', methods=['GET']) 
def findAllArquetipos(): 
    query = arquetipos.find()
    output = [] 
    for x in query: 
        output.append(x) 
    return JSONEncoder().encode(output)
##  busca en arquetipo por parametro especifico, si parametro no existe en indice lo crea 
@app.route('/arquetipos/buscar/<parametro>/<valor>', methods=['GET']) 
def findArquetiposParametro(parametro, valor): 
    if busca_indice(str(parametro)):
        arquetipos.create_index(str(parametro))
    query = arquetipos.find({str(parametro): str(valor)})
    output = [] 
    for x in query: 
        output.append(x) 
    return JSONEncoder().encode(output)

# busca si existe indice
def busca_indice(indice):
    indexes = []
    for key,value in arquetipos.index_information().items():
        indexes.append(value['key'][0][0])
    if indice not in indexes:
        return True
    return False

# Convierte a JSON 
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)