import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCountriesComponent } from './app-countries/app-countries.component';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = 
[
  { path: 'weather/:id', component: WeatherDetailComponent },
  { path: 'home', component: AppCountriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
