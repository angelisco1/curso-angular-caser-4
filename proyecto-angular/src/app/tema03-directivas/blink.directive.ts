import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  @HostBinding('style.background-color') colorFondo: string = ''

  @Input('appBlink') color: string = 'yellow'
  defaultColor: string = 'white'

  intervalId: any | null = null


  constructor() {
    console.log('CONSTRUCTOR: ', this.color)
  }

  ngOnInit() {
    console.log('NGONINIT: ', this.color)
    this.colorFondo = this.defaultColor
  }

  @HostListener('mouseover') onMouseOver() {
    this.intervalId = setInterval(() => {
      this.colorFondo = this.colorFondo === this.defaultColor ? this.color : this.defaultColor
    }, 800)
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearInterval(this.intervalId)
    this.colorFondo = this.defaultColor
  }

}

// <app-vendehumo-card> </app-vendehumo-card>

// -> Constructor(yellow)
// -> Inicializaría los @Inputs(red)
// -> ngOnChanges
// -> ngOnInit(red)
// -> ngOnChanges
// -> ngOnChanges
// -> ngOnChanges
// -> ngOnDestroy
