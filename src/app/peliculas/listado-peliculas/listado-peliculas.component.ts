import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {

  @Input()
  peliculas;


  remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
    console.log(indicePelicula);
  }

}
