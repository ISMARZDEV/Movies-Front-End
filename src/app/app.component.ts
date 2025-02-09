import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


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
      }
    ];

}
