from ConexionDB import historiales
historiales_global = historiales.find()
histos = []
sesiones_global = []
arquetipos_global = []
for histo in historiales_global:
    histos.append(histo)
    i = 0
    for s in histo['sesiones_medica']:
        sesion = {'id':i,'nombre_sesion': s['nombre_sesion'],'profesionales_que_atendieron': histo['profesionales_que_atendieron'][i],  'profesion': s['profesion'], 'fecha': s['fecha'], 'centro_salud':s['centro_salud'], 'nombre_profesional': s['nombre_profesional']}
        sesiones_global.append(sesion)
        arquetipos_global.append(s['arquetipos'])
        i += 1


print("Termino descargar datos!!!!!!!!!!!!!!!!!!!!!")
