import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar',
  // pure: false
})
export class FiltrarPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('PASA POR EL PIPE IMPURO')
    return value.filter((item) => {
      return item.includes(filtro.toLowerCase())
    });
  }

}
