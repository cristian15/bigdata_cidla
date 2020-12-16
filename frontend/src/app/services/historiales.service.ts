import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO } from '../consts/conts';

@Injectable({
  providedIn: 'root'
})
export class HistorialesService {

  constructor(private http: HttpClient) { }

  getCiudades(){
    return this.http.get<any[]>(URL_SERVICIO+'/ciudades');
  }

  getHistoriales(){
    return this.http.get<any[]>(URL_SERVICIO+'/historiales');
  }

  getHistorialesCiudad(ciudad){
    return this.http.get(URL_SERVICIO+'/historiales/ciudad/'+ciudad);
  }
  getCantidadProfesionalesSesiones(){
    return this.http.get<any[]>(URL_SERVICIO+'/sesiones/profesiones');
  }
  getCantidadProfesionalesCiudadSesiones(){
    return this.http.get<any[]>(URL_SERVICIO+'/profesiones/ciudad');
  }
  getSesionesMedicas(){
    return this.http.get<any[]>(URL_SERVICIO+'/sesiones');
  }
  getArquetipos(){
    return this.http.get<any[]>(URL_SERVICIO+'/arquetipos');
  }
}
