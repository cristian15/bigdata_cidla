import { Component, OnInit } from '@angular/core';
import { ArquetiposService } from 'src/app/services/arquetipos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _arquetiposService: ArquetiposService) { }

  ngOnInit(): void {

    this._arquetiposService.getAll().subscribe(res=>{
      console.log(res);
    })
  }

}
