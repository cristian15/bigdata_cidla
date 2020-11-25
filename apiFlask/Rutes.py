from flask import Flask, jsonify, request 
from ConexionDB import app, historiales, arquetipos
from bson import ObjectId
import json

@app.route('/ciudades', methods=['GET']) 
def findAllCiudades(): 
    query = historiales.find()
    salida = []
    for x in query:
        salida.append(x)    
    ciudades = []
    for i in salida:
        if i['ciudad'] not in ciudades:
            ciudades.append(i['ciudad'])
    return JSONEncoder().encode(ciudades)

# devuelve un array con todos los nombres de las distintas sesiones
@app.route('/sesiones_medica', methods=['GET']) 
def findAllSesionesClinicas(): 
    query = historiales.find()
    salida = []
    for x in query:
        salida.append(x)    
    sesiones = []
    for i in salida:
        count = 0
        for s in i['sesiones_medica']:
            if s['nombre_sesion'] not in sesiones:
                sesiones.append(s['nombre_sesion'])
    return JSONEncoder().encode(sesiones)

@app.route('/historiales', methods=['GET']) 
def findAllHistoriales(): 
    query = historiales.find()
    salida = []
    for x in query:
        salida.append(x)
    return JSONEncoder().encode(salida)

@app.route('/historiales/ciudad/<ciudad>', methods=['GET']) 
def findAllHistorialesCiudad(ciudad): 
    query = historiales.find({'ciudad': str(ciudad)})
    salida = []
    for x in query:
        salida.append(x)
    return JSONEncoder().encode(salida)
     

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