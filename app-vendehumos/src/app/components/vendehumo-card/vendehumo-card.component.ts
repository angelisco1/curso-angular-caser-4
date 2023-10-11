import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vendehumo } from 'src/app/types/vendehumo.type';


@Component({
  selector: 'app-vendehumo-card',
  templateUrl: './vendehumo-card.component.html',
  styleUrls: ['./vendehumo-card.component.css']
})
export class VendehumoCardComponent {

  @Input() vendehumo: Vendehumo | null = null
  @Output() onVotar = new EventEmitter<Vendehumo>()


  votar() {
    // this.vendehumo.numVotos += 1
    if (this.vendehumo) {
      this.onVotar.emit(this.vendehumo)
    }
  }

}
