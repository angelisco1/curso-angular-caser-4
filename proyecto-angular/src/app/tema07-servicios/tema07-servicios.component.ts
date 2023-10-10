import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-tema07-servicios',
  templateUrl: './tema07-servicios.component.html',
  styleUrls: ['./tema07-servicios.component.css'],
})
export class Tema07ServiciosComponent {

  userLoggedin: string | null = null

  // private logService: LogService
  // constructor(logService: LogService) {
  //   this.logService = logService
  // }

  constructor(
    private logService: LogService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.userLoggedin$
      .subscribe((userLoggedin: string | null) => {
        this.userLoggedin = userLoggedin
      })

    // Esta linea no hace falta si usamos el BehaviorSubject porque emite el primer valor que le demos como parámetro
    // this.userLoggedin = this.authService.getIsLoggedin()
  }

  mostrarMensajeInfo(inputMsg: HTMLInputElement) {
    this.logService.info(inputMsg.value)
  }

  mostrarMensajeError(inputMsg: HTMLInputElement) {
    this.logService.error(inputMsg.value)
  }

  logout() {
    this.authService.logout()
  }

}
