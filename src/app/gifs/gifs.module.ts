import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
