import { Component, Input, OnInit } from '@angular/core';
import Country from 'src/app/shared/models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input()
  public country: Country = {} as Country;

  constructor(private countryService: CountryService) {
    this.country = this.countryService.getDefaultCountry();
  }

  ngOnInit(): void {
  }

}
