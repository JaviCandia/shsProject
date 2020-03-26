import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() country: Country;

  @Output() cardCountry = new EventEmitter<Country>();

  tap() {
    this.cardCountry.emit(this.country);
  }
}
