import { Component, Input } from '@angular/core';
import { Sugus } from './sugus.type';


@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent {
  @Input() sugus: Sugus = {
    color: 'yellow',
    sabor: 'limón'
  }

  get sugusStyles() {
    return {
      // 'background-color': this.sugus.color
      backgroundColor: this.sugus.color
    }
  }
}
