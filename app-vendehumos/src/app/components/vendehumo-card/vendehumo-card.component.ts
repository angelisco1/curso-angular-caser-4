import { Component, Input } from '@angular/core';
import { Vendehumo } from 'src/app/types/vendehumo.type';


@Component({
  selector: 'app-vendehumo-card',
  templateUrl: './vendehumo-card.component.html',
  styleUrls: ['./vendehumo-card.component.css']
})
export class VendehumoCardComponent {

  @Input() vendehumo: Vendehumo | null = null


  votar() {
    // this.vendehumo.numVotos += 1
  }

}
