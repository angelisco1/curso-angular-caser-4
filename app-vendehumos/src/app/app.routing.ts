import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NuevoVendehumoComponent } from "./pages/nuevo-vendehumo/nuevo-vendehumo.component";
import { Error404Component } from "./pages/error404/error404.component";
import { EditarVendehumoComponent } from "./pages/editar-vendehumo/editar-vendehumo.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent },
  { path: 'vendehumos/:vendehumoId', component: EditarVendehumoComponent },

  { path: '**', component: Error404Component },
]


@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }