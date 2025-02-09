import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {

  peliculas =
  [{
    title: 'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 100
  },
  {
    title: 'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 100
  }];
}
