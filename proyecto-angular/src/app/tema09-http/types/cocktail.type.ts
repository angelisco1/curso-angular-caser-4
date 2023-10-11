export class Cocktail {
  constructor(
    public idDrink: string,
    public strDrink: string,
    public strDrinkThumb: string,
    public strInstructions: string,
    public id: string | null = null,
  ) { }
}

export type Cocktails = Array<Cocktail>