import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) {}

  buscar( termino: string) {
    if (termino.trim().length === 0) {
      return;
    }
    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.gifsService.agregarTermino(valor.toLowerCase());
    this.txtBuscar.nativeElement.value = '';
  }
}
