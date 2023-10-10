import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  urlFirebaseCocktails: string = `https://ejemplos-dc1c1.firebaseio.com/curso-angular-caser-4/cocktails/angel`

  constructor(private http: HttpClient) { }

  getCocktails(searchBy: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBy}`)
  }

  saveCocktail(cocktail: any): Observable<any> {
    return this.http.post(`${this.urlFirebaseCocktails}.json`, cocktail)
  }

}
