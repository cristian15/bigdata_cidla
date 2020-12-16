from ConexionDB import app, historiales
from bson import ObjectId
import json
from bson.json_util import dumps
from const import histos, ruts, sesiones_global, arquetipos_global
import pandas as pd



@app.route('/arquetipos', methods=['GET']) 
def findAllArquetiposSesionesClinicas():     
    return dumps(arquetipos_global)
@app.route('/ciudades', methods=['GET']) 
def cantidadHistoriasCiudad():  
    ciudades = []
    for h in histos:
        ciudades.append(h['ciudad'])
    ciuda = pd.Index(ciudades, name="Ciudades")
    item_counts = ciuda.value_counts()
    return dumps(item_counts)
# Devuelve profesiones con la cantidad de veces en las sesiones medicas
@app.route('/sesiones/profesiones', methods=['GET']) 
def cantidadProfesionesSesiones():  
    profesiones = []
    for s in sesiones_global:
        profesiones.append(s['profesion'])
    prof = pd.Index(profesiones, name="Profesiones")
    item_counts = prof.value_counts()
    return dumps(item_counts)

@app.route('/profesiones/ciudad', methods=['GET']) 
def cantidadProfesionesCiudad():  
    profesiones = []
    
    for h in histos:
        for s in h['sesiones_medica']:
            profesiones.append({'profesion': s['profesion'], 'ciudad': h['ciudad']})
            #profesiones.append(s['profesion'] + ';' +  h['ciudad'])

    prof = pd.DataFrame(profesiones)
    item_counts = prof.applymap(lambda x: isinstance(x, dict)).all()
    profs = []
   
    return dumps(prof)

@app.route('/historiales', methods=['GET']) 
def findAllHistoriales(): 
    return dumps(histos)
@app.route('/sesiones', methods=['GET']) 
def findAllSesiones(): 
    return dumps(sesiones_global)

