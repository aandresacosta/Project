import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  public titulo= "formulario de editorial";
  public nombredit : String;

  constructor() { }

  ngOnInit() {
  }

}
