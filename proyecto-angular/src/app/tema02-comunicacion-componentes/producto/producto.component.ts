import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sugus } from '../sugus/sugus.type';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto: Sugus | null = null
  @Output() onAddToCart = new EventEmitter<Sugus>()

  addToCart() {
    if (this.producto) {
      this.onAddToCart.emit(this.producto)
    }
  }

}
