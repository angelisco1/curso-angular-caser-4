import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendehumo } from '../types/vendehumo.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  url: string = 'https://ejemplos-dc1c1.firebaseio.com/curso-angular-caser-4/vendehumos/angel'

  constructor(private http: HttpClient) { }

  getVendehumo(vendehumoId: string) {
    return this.http.get(`${this.url}/${vendehumoId}.json`)
  }

  getVendehumos() {
    return this.http.get(`${this.url}.json`)
      .pipe(
        map((data: any) => {
          const vendehumos = []

          for (let id in data) {
            const vendehumo = data[id]
            vendehumo.id = id

            vendehumos.push(vendehumo)
          }

          return vendehumos
        })
      )
  }

  createVendehumo(vendehumo: Vendehumo) {
    return this.http.post(`${this.url}.json`, vendehumo)
  }

  voteVendehumo(vendehumo: Vendehumo) {
    const updatedNumVotos = { numVotos: vendehumo.numVotos + 1 }
    return this.http.patch(`${this.url}/${vendehumo.id}.json`, updatedNumVotos)
  }

  updateVendehumo(vendehumo: Vendehumo) {
    return this.http.put(`${this.url}/${vendehumo.id}.json`, vendehumo)
  }
}