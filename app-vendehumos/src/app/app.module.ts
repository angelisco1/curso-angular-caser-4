import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendehumoCardComponent } from './components/vendehumo-card/vendehumo-card.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoVendehumoComponent } from './pages/nuevo-vendehumo/nuevo-vendehumo.component';
import { FormVendehumoComponent } from './components/form-vendehumo/form-vendehumo.component';
import { AppRoutingModule } from './app.routing';
import { Error404Component } from './pages/error404/error404.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarVendehumoComponent } from './pages/editar-vendehumo/editar-vendehumo.component';

@NgModule({
  declarations: [
    AppComponent,
    VendehumoCardComponent,
    HomeComponent,
    NuevoVendehumoComponent,
    FormVendehumoComponent,
    Error404Component,
    MenuComponent,
    EditarVendehumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
