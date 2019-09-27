import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { AutoresComponent } from './autores/autores.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { EditorialComponent } from './editorial/editorial.component';


@NgModule({
  declarations: [
    BibliotecaComponent,
    AutoresComponent,
    ExistenciaComponent,
    LibroComponent,
    TipoComponent,
    AreasComponent,
    EditorialComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
