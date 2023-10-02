import { Component } from '@angular/core';


type Logo = {
  nombre: string,
  url: string,
}
// class Logo {
//   nombre: string = ''
//   url: string = ''
// }


@Component({
  selector: 'app-tema01-data-binding',
  templateUrl: './tema01-data-binding.component.html',
  styleUrls: ['./tema01-data-binding.component.css']
})
export class Tema01DataBindingComponent {
  // string, number, boolean
  // Array<number>, Array<string>
  // []number, []string
  // any
  // undefined, null, void

  nombre: string = 'Charly'
  apellido: string = 'Falco'
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'


  logo: Logo = {
    nombre: 'Angular',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  }

  numClicks: number = 0

  // propiedad1: string | null = null

  constructor() {
    // GET propiedad1
    // this.propiedad1 = 'el valor'
  }

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  get altImage() {
    return `Logo de ${this.logo.nombre}`
  }

  getNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
    // return this.nombre + ' ' + this.apellido
  }

  changeNumClicks(): void {
    this.numClicks++
    alert(`Se ha pulsado ${this.numClicks} veces.`)
  }

  changeNombre(event: Event): void {
    console.log(event)

    const target = event.target as HTMLInputElement
    this.nombre = target.value
  }

}
