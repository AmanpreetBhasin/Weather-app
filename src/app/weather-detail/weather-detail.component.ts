import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  public weather;
  public city;
  public units = 'metric';
  public loaded = false;
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails('metric');
  }
  getDetails(units) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.city = params.get('id')
      console.log(this.city);
    })
    this.loaded = false;
    this.appService.getWeather(this.city, units).subscribe((data)=> {
      this.weather = data;
      this.loaded = true;
  });
  }
  changeUnit(e) {
    console.log(e);
    this.units = e.value; 
    this.getDetails(e.value);
  }
}
