import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    peliculasEnCines =
      [{
        title: 'Lion King',
        fechaLanzamiento: new Date(),
        precio: 100
      },
      {
        title: 'Spiderman',
        fechaLanzamiento: new Date(),
        precio: 100
      }
    ];

    peliculasProximosEstrenos =
      [{
        title: 'Transformer',
        fechaLanzamiento: new Date(),
        precio: 100
      },
      {
        title: 'Avengers EndGame',
        fechaLanzamiento: new Date(),
        precio: 100
      }
    ];

}
