import { Component } from '@angular/core';
import { Vendehumo } from './types/vendehumo.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vendehumos';

  listaVendehumos: Array<Vendehumo> = [
    {
      id: 'abc',
      nombre: 'Vendehumo 1',
      numVotos: 0,
      categoria: 'crypto',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    },
    {
      id: 'def',
      nombre: 'Vendehumo 2',
      numVotos: 0,
      categoria: 'trading',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    },
    {
      id: 'ghi',
      nombre: 'Vendehumo 3',
      numVotos: 0,
      categoria: 'dropshipping',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    },
  ]


}
