from ConexionDB import historiales
historiales_global = historiales.find()
ruts= []
histos = []
sesiones_global = []
arquetipos = []
for histo in historiales_global:
    ruts.append(histo['rut'])
    histos.append(histo)
    i = 0
    for s in histo['sesiones_medica']:
        sesion = {'id':i,'nombre_sesion': s['nombre_sesion'],'profesionales_que_atendieron': histo['profesionales_que_atendieron'][i],  'profesion': s['profesion'], 'fecha': s['fecha'], 'centro_salud':s['centro_salud'], 'nombre_profesional': s['nombre_profesional']}
        sesiones_global.append(sesion)
        i += 1


print("Termino descargar datos!!!!!!!!!!!!!!!!!!!!!")
