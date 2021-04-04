import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCountriesComponent } from './app-countries.component';

describe('AppCountriesComponent', () => {
  let component: AppCountriesComponent;
  let fixture: ComponentFixture<AppCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
