import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Country from 'src/app/shared/models/country';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country: Country = {
    name: '',
    flag: '',
    capital: '',
    region: '',
    subregion: '',
    nativeName: '',
    population: 0,
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borders: []
  };

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.country = this.location.getState() as Country;
  }

}
