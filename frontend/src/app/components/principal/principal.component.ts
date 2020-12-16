import { Component, OnInit } from '@angular/core';
import { HistorialesService } from 'src/app/services/historiales.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private _historialService: HistorialesService) { }

  sesiones_medicas = [];
  ciudades = [];
  ngOnInit(): void {

        
  }

 
}
