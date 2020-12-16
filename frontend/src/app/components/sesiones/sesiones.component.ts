import { Component, OnInit } from '@angular/core';
import { HistorialesService } from 'src/app/services/historiales.service';
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {

  buscar = "";
  cargando = true;

  constructor(private _historialService: HistorialesService) { }

  sesiones = [];
  sesiones_profesiones = [];
  graficos = ['Barra', 'Linea', 'Torta']
  selectedGrafica = this.graficos[0];
  filtros = [{nombre:'Nombre Sesion', valor:'nombre_sesion'}, {nombre:'Profesión', valor:'profesion'}, {nombre:'Centro Salud', valor:'centro_salud'}]
  filtros_selected = []
  selectedFiltro = this.filtros[0].valor;
  ngOnInit(): void {
    this._historialService.getSesionesMedicas().subscribe(res=>{
      this.sesiones = res;
      this.cargando = false;
      this.sesiones_tabla = res;
    });

    this._historialService.getCantidadProfesionalesSesiones().subscribe(res=>{
      this.sesiones_profesiones = res;
      for (let s of this.sesiones_profesiones){
        this.pieChartData.push(s.cuantos);
        this.pieChartLabels.push(s.profesion);
      }
    
    });

    this._historialService.getCiudades().subscribe(res=>{
      console.log(res);
      for(let c of res){
        this.barChartLabels.push(c.ciudad);
        this.barChartData[0].data.push(c.cuantos)
      }
    });

  }
  sesiones_tabla = [];
  buscarSesion(){
    this.sesiones_tabla = this.sesiones.filter(x=> x.centro_salud.toLowerCase().includes(this.buscar))
   
  }
  
  
  agregar_filtro(){
    console.log("filtro agregado");
    this.filtros_selected.push(this.sesiones.filter(x=> x[this.selectedFiltro]));
   }

  removeFiltro(fil){
    this.filtros_selected.splice(this.filtros_selected.indexOf(fil),1);
  }

  torta = true;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];


  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Sesiones Medicas por Ciudad' }
  ];
}
