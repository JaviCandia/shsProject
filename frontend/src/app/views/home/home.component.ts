import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actual: Country;
  countriesArray = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.obtain();
  }

  obtain() {
    this.countriesService.getCountries()
      .subscribe(countries => {
        this.countriesArray = countries;
      })
  }
}
