import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tema01DataBindingComponent } from './tema01-data-binding/tema01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Tema02ComunicacionComponentesComponent } from './tema02-comunicacion-componentes/tema02-comunicacion-componentes.component';
import { SugusComponent } from './tema02-comunicacion-componentes/sugus/sugus.component';
import { Tema03DirectivasComponent } from './tema03-directivas/tema03-directivas.component';


@NgModule({
  declarations: [
    AppComponent,
    Tema01DataBindingComponent,
    Tema02ComunicacionComponentesComponent,
    SugusComponent,
    Tema03DirectivasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
