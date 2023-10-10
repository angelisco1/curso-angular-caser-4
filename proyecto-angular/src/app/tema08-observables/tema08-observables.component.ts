import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-tema08-observables',
  templateUrl: './tema08-observables.component.html',
  styleUrls: ['./tema08-observables.component.css']
})
export class Tema08ObservablesComponent {

  mostrarContador: boolean = true

  ngOnInit() {

    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => {
        subscriber.next('Hola, que tal?')
      }, 1500)
      setTimeout(() => {
        subscriber.next('Eiiii, contesta')
      }, 3000)

      // setTimeout(() => {
      //   subscriber.error('Algo ha ido mal...')
      // }, 2000)

      setTimeout(() => {
        subscriber.complete()
      }, 2000)
    })

    miObservable.subscribe({
      next: (msg: string) => { console.log(msg) },
      error: (err: string) => { console.log(err) },
      complete: () => { console.log('Se ha terminado.') }
    })

    // ANTIGUAMENTE SE HACIA ASÍ
    // miObservable.subscribe(
    //   (msg: string) => { ... },
    //   (err: string) => { ... },
    //   () => { ... },
    // )

  }

  toggleContador() {
    this.mostrarContador = !this.mostrarContador
  }

}
