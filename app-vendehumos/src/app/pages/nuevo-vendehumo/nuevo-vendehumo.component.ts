import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.type';

@Component({
  selector: 'app-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent {

  constructor(
    private vendehumosService: VendehumosService,
    private router: Router,
  ) { }

  guardarVendehumo(vendehumo: Vendehumo) {
    this.vendehumosService.createVendehumo(vendehumo)
      .subscribe((data: any) => {
        console.log('Se ha creado el vendehumo con el id: ', data.name)

        this.router.navigateByUrl('/home')
      })
  }


}
