import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }


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
