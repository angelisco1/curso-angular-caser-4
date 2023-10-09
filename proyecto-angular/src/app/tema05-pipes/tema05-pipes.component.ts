import { Component } from '@angular/core';

@Component({
  selector: 'app-tema05-pipes',
  templateUrl: './tema05-pipes.component.html',
  styleUrls: ['./tema05-pipes.component.css']
})
export class Tema05PipesComponent {

  producto = {
    titulo: 'one plus 11',
    precio: 800,
    fechaSalida: new Date(),
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum eius accusamus explicabo. Sed error necessitatibus exercitationem! Dolor, accusantium vero! Aut porro beatae nulla eveniet accusamus nam quaerat dolor nisi!',
  }

  mascotas = [
    'perro',
    'gato',
    'tortuga',
    'canario',
    'periquito',
  ]
  filtro: string = ''

  messagePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 2500)
  })

  setFiltro(event: Event) {
    this.filtro = (event.target as HTMLInputElement).value
  }

  addMascota(event: Event) {
    const nuevaMascota = (event.target as HTMLInputElement).value
    // this.mascotas.push(nuevaMascota)
    this.mascotas = [...this.mascotas, nuevaMascota]
  }

}
