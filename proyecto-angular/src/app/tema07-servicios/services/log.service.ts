import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  info(msg: string) {
    const fecha = new Date()

    console.log(`[INFO - ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}]: ${msg}`)
  }

  error(msg: string) {
    const fecha = new Date()

    console.log(`[ERROR - ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}]: ${msg}`)
  }
}
