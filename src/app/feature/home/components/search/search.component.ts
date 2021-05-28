import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import CountrySearch from '../../models/country-search';
import { Region } from '../../enums/region';
import { RegionStrings } from '../../types/region-string';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchField: FormControl = new FormControl();
  filter: FormControl = new FormControl();

  regions: string[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.setRegions();
  }

  private setRegions(): void {
    for (const keyName in Region) {
      if (isNaN(Number(keyName)))
        this.regions.push(keyName);
    }
  }

  public search(): void {
    const countrySearch: CountrySearch = {
      countryName: this.searchField.value || '',
      region: this.filter.value || 'Europe'
    };
    this.countryService.addSearch(countrySearch);
  }

  public regionChanged(value: string): void {
    const region: RegionStrings = value as keyof typeof Region;

    const countrySearch: CountrySearch = {
      countryName: this.searchField.value || '',
      region: region || 'Europe'
    };
    this.countryService.addSearch(countrySearch);
  }
}
