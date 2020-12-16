from ConexionDB import app, historiales
from bson import ObjectId
import json
from bson.json_util import dumps
from const import histos, ruts, sesiones_global




@app.route('/arquetipos', methods=['GET']) 
def findAllArquetiposSesionesClinicas():     
    return dumps(arquetipos)

@app.route('/historiales', methods=['GET']) 
def findAllHistoriales(): 
    return dumps(histos)

@app.route('/ruts', methods=['GET']) 
def findAllRuts(): 
    return dumps(ruts)

