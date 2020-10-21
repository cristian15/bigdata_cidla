import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.css']
})
export class ConsolaComponent implements OnInit {

  constructor() { }

  comandos = [];
  comando = "";

  ngOnInit(): void {
  }

  ingresaComando(){  
    if(this.comando.length>0){
      this.comandos.push(this.comando);
      this.comando = "";
    }
  }
}
