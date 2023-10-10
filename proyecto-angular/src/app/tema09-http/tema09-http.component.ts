import { Component } from '@angular/core';
import { CocktailsService } from './services/cocktails.service';

@Component({
  selector: 'app-tema09-http',
  templateUrl: './tema09-http.component.html',
  styleUrls: ['./tema09-http.component.css']
})
export class Tema09HttpComponent {

  cocktails: Array<any> = []
  searchBy: string = 'mojito'

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
    this.search()
  }

  search() {
    this.cocktailsService.getCocktails(this.searchBy)
      .subscribe((data: any) => {
        console.log({ data })
        this.cocktails = data.drinks
      })
  }

}
