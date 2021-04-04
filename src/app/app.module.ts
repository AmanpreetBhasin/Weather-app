import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { AppCountriesComponent } from './app-countries/app-countries.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
var matModules = 
[MatSlideToggleModule , 
  MatToolbarModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule, 
  MatButtonModule, 
  MatRadioModule, 
  MatCardModule,
  MatExpansionModule, 
  MatDividerModule,
MatProgressSpinnerModule]
@NgModule({
  declarations: [
    AppComponent,
    AppCountriesComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...matModules
  ],
  exports: [...matModules],
  providers: [{provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },}],
  bootstrap: [AppComponent]
})
export class AppModule { }
