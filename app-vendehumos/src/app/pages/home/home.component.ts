import { Component } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // listaVendehumos: Array<Vendehumo> = [
  //   {
  //     id: 'abc',
  //     nombre: 'Vendehumo 1',
  //     numVotos: 0,
  //     categoria: 'crypto',
  //     foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  //   },
  //   {
  //     id: 'def',
  //     nombre: 'Vendehumo 2',
  //     numVotos: 0,
  //     categoria: 'trading',
  //     foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  //   },
  //   {
  //     id: 'ghi',
  //     nombre: 'Vendehumo 3',
  //     numVotos: 0,
  //     categoria: 'dropshipping',
  //     foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  //   },
  //   {
  //     id: 'jkl',
  //     nombre: 'Vendehumo 4',
  //     numVotos: 0,
  //     categoria: 'crypto',
  //     foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  //   },
  // ]
  listaVendehumos: Array<Vendehumo> = []

  categoriaSeleccionada: string | null = null
  categorias: Array<string> = ['crypto', 'trading', 'dropshipping', 'education', 'other']

  get vendehumosFiltradosPorCategoriaSeleccionada() {
    return this.listaVendehumos.filter((vendehumo: Vendehumo) => vendehumo.categoria === this.categoriaSeleccionada)
  }

  constructor(
    private vendehumosService: VendehumosService,
  ) { }

  ngOnInit() {
    this.vendehumosService.getVendehumos()
      .subscribe((vendehumos: Array<Vendehumo>) => {
        this.listaVendehumos = vendehumos
      })
  }

  votarVendehumo(vendehumo: Vendehumo) {
    const vendehumoId = vendehumo.id

    this.vendehumosService.voteVendehumo(vendehumo)
      .subscribe((data: any) => {
        console.log({ data })

        this.listaVendehumos = this.listaVendehumos.map((vendehumo: Vendehumo) => {
          if (vendehumo.id === vendehumoId) {
            return {
              ...vendehumo,
              numVotos: data.numVotos
            }
          }
          return vendehumo
        })

      })

    // [1, 2, 3, 2].filter(num => num === 2) => [2, 2]
    // [1, 2, 3, 2].find(num => num === 2) => 2
    // [1, 2, 3, 2].map(num => num * 2) => [2, 4, 6, 4]

    // const nums = [1, 2, 3]
    // [...nums, 4] => [1, 2, 3, 4]

    // const persona = {nombre: 'aaa', edad: '29'}
    // {...persona, edad: persona.edad + 1} => {nombre: 'aaa', edad: '30'}

    // const listaVendehumosActualizada = this.listaVendehumos.map((vendehumo: Vendehumo) => {
    //   if (vendehumo.id === vendehumoId) {
    //     return {
    //       ...vendehumo,
    //       numVotos: vendehumo.numVotos + 1
    //     }
    //   }
    //   return vendehumo
    // })

    // this.listaVendehumos = listaVendehumosActualizada

  }

  setCategoriaSeleccionada(categoria: string) {
    this.categoriaSeleccionada = categoria
  }
}
