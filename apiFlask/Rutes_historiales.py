from ConexionDB import app, historiales
from bson import ObjectId
import json
from bson.json_util import dumps

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
    sesiones = []
    for i in query:
        for s in i['sesiones_medica']:
            if s['nombre_sesion'] not in sesiones:
                sesiones.append(s['nombre_sesion'])
    return JSONEncoder().encode(sesiones)

@app.route('/sesiones_medica/arquetipos', methods=['GET']) 
def findAllArquetiposSesionesClinicas(): 
    query = historiales.find()      
    arquetipos = []
    for i in query:
        for s in i['sesiones_medica']:            
                for a in s['arquetipos']:
                    for arquetipo in a:
                        if arquetipo not in arquetipos:
                            arquetipos.append(arquetipo)
    return dumps(arquetipos)

@app.route('/api/historiales', methods=['GET']) 
def findAllHistoriales(): 
    query = historiales.find()
    return dumps(list(query))

@app.route('/historiales/ciudad/<ciudad>', methods=['GET']) 
def findAllHistorialesCiudad(ciudad): 
    query = historiales.find({'ciudad': str(ciudad)})
    salida = []
    for x in query:
        salida.append(x)
    return JSONEncoder().encode(salida)

# Convierte a JSON 
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)