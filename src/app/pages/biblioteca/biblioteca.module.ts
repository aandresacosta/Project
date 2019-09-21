import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { AutoresComponent } from './autores/autores.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';


@NgModule({
  declarations: [BibliotecaComponent, AutoresComponent, ExistenciaComponent, LibroComponent, TipoComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
