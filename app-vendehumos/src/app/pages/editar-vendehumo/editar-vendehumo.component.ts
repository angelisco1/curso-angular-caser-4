import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { Vendehumo } from 'src/app/types/vendehumo.type';

@Component({
  selector: 'app-editar-vendehumo',
  templateUrl: './editar-vendehumo.component.html',
  styleUrls: ['./editar-vendehumo.component.css']
})
export class EditarVendehumoComponent {
  vendehumo: Vendehumo | null = null

  constructor(
    private vendehumosService: VendehumosService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        console.log({ params })
        const vendehumoId = params.get('vendehumoId')

        if (vendehumoId) {
          this.vendehumosService.getVendehumo(vendehumoId)
            .subscribe((vendehumo: any) => {
              console.log({ vendehumo })
              vendehumo.id = vendehumoId
              this.vendehumo = vendehumo
            })
        }
      })

  }

  actualizarVendehumo(vendehumo: Vendehumo) {
    // PUT
    console.log({ vendehumo })
    this.vendehumosService.updateVendehumo(vendehumo)
      .subscribe(() => {
        this.router.navigateByUrl('/home')
      })
  }

}
