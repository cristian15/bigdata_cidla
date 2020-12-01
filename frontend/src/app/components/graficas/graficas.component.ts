import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HistorialesService } from 'src/app/services/historiales.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, AfterViewInit  {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  
  @ViewChild('arquetipoInput') arquetipoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  
  ngAfterViewInit() {
    this.barChartMethod();
  /*   this.doughnutChartMethod();
    this.lineChartMethod(); */
  }
  constructor(private _historialService: HistorialesService) { }



  sesiones_medicas=[];
  arquetipos = [];
  allArquetipos = [];
  arquetiposFilter: Observable<any[]>;
  historiales = [];
  ngOnInit(): void {
    this.arquetiposFilter = this.formCtrl.valueChanges.pipe(
      startWith([]),
      map((arq: any) => this._filter(arq)));
    
    this._historialService.getArquetiposSesionesMedicas().subscribe(res=>{
      this.allArquetipos = res;
    });
      console.log(this.arquetipos);

    this._historialService.getHistoriales().subscribe(res=>{
      this.historiales=res;  
      console.log(this.historiales);    
      this._historialService.getSesiones().subscribe(resp=>{
        this.sesiones_medicas = resp;
        })
    });
  }
  eliminarFiltro(a){
    this.arquetipos.splice(this.arquetipos.indexOf(a),1);
  }

  add(event: MatChipInputEvent): void {

    console.log("ADD:::", event)
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.arquetipos.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.formCtrl.setValue(null);
  }


  selected(event: any): void {
    console.log(event);
    this.arquetipos.push(event.option.viewValue);
    this.arquetipoInput.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  private _filter(value: any): any[] {
    const filterValue = value.valor.toLowerCase();
    console.log("VALOORO:::", value)
    return this.arquetipos.filter(x => x.valor.toLowerCase().indexOf(filterValue) === 0);


  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }



  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
