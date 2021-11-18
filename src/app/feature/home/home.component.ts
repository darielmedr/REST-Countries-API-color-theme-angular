import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Country from 'src/app/shared/models/country';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries$: Observable<Country[]> = new Observable();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(): void {
    this.countries$ = this.countryService.getCountries();
  }
}
