import { Component, OnInit } from '@angular/core';
import { ArquetiposService } from 'src/app/services/arquetipos.service';
import { HistorialesService } from 'src/app/services/historiales.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _arquetiposService: ArquetiposService, private _historialSerice: HistorialesService) { }

  sesiones_medicas = [];
  ciudades = [];
  ngOnInit(): void {

    
    this._historialSerice.getSesiones().subscribe(res=>{
      this.sesiones_medicas = res;
    })
    this._historialSerice.getCiudades().subscribe(res=>{
      this.ciudades = res;
    });
  }

  eliminarFiltro(sesion){

    
  }
}
