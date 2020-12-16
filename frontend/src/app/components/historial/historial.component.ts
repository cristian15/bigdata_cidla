import { Component, OnInit } from '@angular/core';
import { HistorialesService } from 'src/app/services/historiales.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private _historialesService: HistorialesService) { }

  historiales = [];
  historiales_tabla = [];
  buscar = "";
  cargando = true;
  ngOnInit() {

    this._historialesService.getHistoriales().subscribe(res=>{
          this.historiales = res;
          this.historiales_tabla = res;
          this.cargando = false;
    });

  }

  cuenta(arr:[]){
    let i =0;
    for(let j of arr){
      i+=j;
    }
    return i;
  }

  buscarHistorial(){
    this.historiales_tabla = this.historiales.filter(x=> x.ciudad.toLowerCase().includes(this.buscar));

  }

}
