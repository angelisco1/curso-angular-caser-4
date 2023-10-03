import { Component } from '@angular/core';
import { Vendehumo } from 'src/app/types/vendehumo.type';


@Component({
  selector: 'app-vendehumo-card',
  templateUrl: './vendehumo-card.component.html',
  styleUrls: ['./vendehumo-card.component.css']
})
export class VendehumoCardComponent {

  vendehumo: Vendehumo = {
    id: 'abc',
    nombre: 'Vendehumo 1',
    numVotos: 0,
    categoria: 'crypto',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  }


  votar() {
    this.vendehumo.numVotos += 1
  }

}
