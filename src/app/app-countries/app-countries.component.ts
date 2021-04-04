import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './app-countries.component.html',
  styleUrls: ['./app-countries.component.css']
})
export class AppCountriesComponent implements OnInit, AfterViewInit {
  public rowData;
  public displayedColumns: string[];
  public dataSource;
  public loaded=false;
  public selection = new SelectionModel(false, []);
  public selectedCountry ='';
  public selectedCapital = '';
  constructor(private appService : AppService, private route: ActivatedRoute,
    private router: Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.appService.getCountries().subscribe((data: any) => {
    var rowData = data.map(o => ['name', 'capital', 'alpha2Code'].reduce((acc, curr) => {
      acc[curr] = o[curr];
      return acc;
    }, {}));
    this.displayedColumns= ['select','name', 'capital'];
    this.dataSource = new MatTableDataSource(rowData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loaded = true;
  });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  select(row) {
    this.selection.toggle(row);
    this.selectedCountry = this.selection.selected[0].name;
    this.selectedCapital = this.selection.selected[0].capital;
  }
  navigate() {
    this.router.navigate(['/weather', this.selectedCapital])
  }
}
