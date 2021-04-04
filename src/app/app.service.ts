import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getWeather(city, units){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=794ee95e63c5a32aaf88cd813fa2e425&units=${units}`);
  }
}
