import { Component, Input, OnInit } from '@angular/core';
import Country from 'src/app/shared/models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  @Input()
  public countries: Country[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
