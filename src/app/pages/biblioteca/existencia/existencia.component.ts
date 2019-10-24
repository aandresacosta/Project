import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {
  public titulo= "formulario de existencia";
  public nombre : String;
  public apellido: String;
  public fec_nac: String; 
  public nacionalidad: String; 
  
  constructor() { }

  ngOnInit() {
  }

}
