import { Component } from '@angular/core';
import { Sugus } from '../tema02-comunicacion-componentes/sugus/sugus.type';

@Component({
  selector: 'app-tema03-directivas',
  templateUrl: './tema03-directivas.component.html',
  styleUrls: ['./tema03-directivas.component.css']
})
export class Tema03DirectivasComponent {

  aplicarFondoNegro: boolean = true
  aplicarLetraNaranja: boolean = false

  isLoggedIn: boolean = true
  usuario: string = 'Ángel'

  get clases1() {
    return {
      fondoNegro: this.aplicarFondoNegro,
      letraNaranja: this.aplicarLetraNaranja
    }
  }

  get clases2() {
    return {
      fondoAzul: true,
      letraBlanca: true
    }
  }

  listaSugus: Array<Sugus> = [
    {
      color: 'red',
      sabor: 'fresa'
    },
    {
      color: 'orange',
      sabor: 'naranja'
    },
    {
      color: 'blue',
      sabor: 'piña'
    },
    {
      color: 'yellow',
      sabor: 'limón'
    },
  ]

  contactos: Array<string> = [
    'Charly Falco: 666777888',
    'Mike Kozinski: 666777999',
    'Octavia Blake: 666777000',
  ]

  get contactosFiltrados() {
    return this.contactos.filter(
      (item: string) => {
        return !item.includes('Mike')
      }
    )
  }

  miMascota: string = 'tortuga'
  mascotas: Array<string> = [
    'perro',
    'gato',
    'periquito',
    'canario',
  ]

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }
}
