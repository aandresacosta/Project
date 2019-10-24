import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  public titulo= "formulario de areas";
  public genero : String;

  constructor() { }

  ngOnInit() {
  }

}
