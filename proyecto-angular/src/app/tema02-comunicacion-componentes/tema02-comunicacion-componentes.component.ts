import { Component } from '@angular/core';
import { Sugus } from './sugus/sugus.type';
import { Carrito } from './carrito.type';

@Component({
  selector: 'app-tema02-comunicacion-componentes',
  templateUrl: './tema02-comunicacion-componentes.component.html',
  styleUrls: ['./tema02-comunicacion-componentes.component.css']
})
export class Tema02ComunicacionComponentesComponent {

  sugusFresa = {
    color: 'red',
    sabor: 'fresa'
  }

  sugusNaranja = {
    color: 'orange',
    sabor: 'naranja'
  }

  productos: Array<Sugus> = [
    {
      color: 'red',
      sabor: 'fresa'
    },
    {
      color: 'orange',
      sabor: 'naranja'
    }
  ]

  carrito: Carrito = {}

  // {
  //   'limón': 5,
  //   'fresa': 1,
  //   'naranja': 1
  // }

  addProductToCart(producto: Sugus) {
    const keys = Object.keys(this.carrito)

    if (keys.includes(producto.sabor)) {
      this.carrito[producto.sabor] += 1
    } else {
      this.carrito[producto.sabor] = 1
    }

  }

}
