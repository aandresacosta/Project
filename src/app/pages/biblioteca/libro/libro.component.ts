import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  public titulo= "formulario de libro";
  public nombre : String;
  public genero_libro : String;
  public fec_publi : String; 
    
  constructor() { }

  ngOnInit() {
  }

}
