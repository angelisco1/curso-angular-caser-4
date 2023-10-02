import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendehumoCardComponent } from './components/vendehumo-card/vendehumo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VendehumoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
