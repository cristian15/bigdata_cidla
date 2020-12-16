from ConexionDB import historiales
historiales_global = historiales.find()
ruts= []
histos = []
sesiones_global = []
for histo in historiales_global:
    ruts.append(histo['rut'])
    histos.append(histo)






print("Termino descargar datos")
