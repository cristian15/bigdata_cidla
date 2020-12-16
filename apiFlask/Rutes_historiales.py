from ConexionDB import app, historiales
from bson import ObjectId
import json
from bson.json_util import dumps
from const import histos, sesiones_global, arquetipos_global
import pandas as pd



@app.route('/arquetipos', methods=['GET']) 
def findAllArquetiposSesionesClinicas():     
    return dumps(arquetipos_global)

# Devuelve las ciudades y la cantidad de fichas en esa ciudad
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
            profesiones.append([s['profesion'],
                                h['ciudad']])

    index = pd.Index(profesiones)
    cantProf = index.value_counts()
    profs = {}
    i=0
    for data in cantProf:
        profs.update({i:{'profesion':cantProf.keys()[i],'values':data}})
        i+=1

    return dumps(profs)

@app.route('/historiales', methods=['GET']) 
def findAllHistoriales(): 
    return dumps(histos)
@app.route('/sesiones', methods=['GET']) 
def findAllSesiones(): 
    return dumps(sesiones_global)

@app.route('/historiales/ciudad/<ciudad>', methods=['GET']) 
def findHistorialCiudad(ciudad): 
    his = []
    for h in histos:
        if(h['ciudad'] == ciudad):
            his.append(h)   
    return dumps(his)

