import { Component } from '@angular/core';
import { CocktailsService } from './services/cocktails.service';
import { Cocktail, Cocktails } from './types/cocktail.type';

@Component({
  selector: 'app-tema09-http',
  templateUrl: './tema09-http.component.html',
  styleUrls: ['./tema09-http.component.css']
})
export class Tema09HttpComponent {

  cocktails: Array<any> = []
  favCocktails: Cocktails = []
  searchBy: string = 'mojito'

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
    this.search()
    this.getFavouriteCocktails()
  }

  search() {
    this.cocktailsService.getCocktails(this.searchBy)
      .subscribe((data: any) => {
        console.log({ data })
        this.cocktails = data.drinks
      })
  }

  guardar(drink: any) {
    const cocktail: Cocktail = new Cocktail(drink.idDrink, drink.strDrink, drink.strDrinkThumb, drink.strInstructions)

    this.cocktailsService.saveCocktail(cocktail)
      .subscribe((data: any) => {
        console.log({ data })
        cocktail.id = data.name
        this.favCocktails.push(cocktail)
      })
  }

  getFavouriteCocktails() {
    this.cocktailsService.getFavouriteCocktails()
      .subscribe((favCocktails: Cocktails) => {
        console.log({ favCocktails })
        this.favCocktails = favCocktails
      })
  }

  eliminar(cocktail: Cocktail) {
    if (cocktail.id) {
      this.cocktailsService.deleteFavouriteCocktail(cocktail.id)
        .subscribe(() => {
          this.favCocktails = this.favCocktails.filter((favCocktail: Cocktail) => {
            return favCocktail.id !== cocktail.id
          })
        })
    }
  }

}
