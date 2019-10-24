import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {
  public titulo= "formulario de libro";
  public tipo : String;
  public genero_tipo : String;
  public fec_publi_tipo : String; 
    
  constructor() { }

  ngOnInit() {
  }

}
