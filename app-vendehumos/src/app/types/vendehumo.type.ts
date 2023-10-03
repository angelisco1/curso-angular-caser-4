// export class Vendehumo {

//   private atributo: string
//   readonly atributoSoloDeLectura = 1

//   constructor(atr) {
//     this.atributo = atr
//   }

//   get at1() {
//     return this.atributo
//   }

//   getAt1() {
//     return this.atributo
//   }

// }

export type Vendehumo = {
  id: string,
  nombre: string,
  numVotos: number,
  categoria: string,
  foto: string,
}