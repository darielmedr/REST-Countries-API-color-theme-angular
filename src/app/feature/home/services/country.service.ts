import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import Country from 'src/app/shared/models/country';
import CountrySearch from '../models/country-search';

@Injectable()
export class CountryService {

  baseUrl: string = 'https://restcountries.com/v2';
  fields: string = 'name,flag,capital,region,subregion,nativeName,population,topLevelDomain,currencies,languges,borders';

  private searchSubject$: BehaviorSubject<CountrySearch> = new BehaviorSubject(<CountrySearch>
    {
      countryName: 'all',
      region: 'Americas'
    }
  );

  constructor(private http: HttpClient) { }

  public getDefaultCountry(): Country {
    return {
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
  }

  public addSearch(countrySearch: CountrySearch): void {
    this.searchSubject$.next(countrySearch);
  }

  public getCountries(): Observable<Country[]> {
    return this.searchSubject$.asObservable().pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: CountrySearch) => {
        if (value.countryName === 'all' || value.countryName === '') {
          return this.getCountriesByRegion(value.region);
        }
        else {
          return this.getCountriesByNameAndRegion(value.countryName, value.region);
        }
      }),
    );
  }

  private getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=${this.fields}`).pipe(
      map((values: any[]) => values.map((value: any) => this.mapApiResponseToCountry(value)))
    );
  }

  private getCountriesByNameAndRegion(countryName: string, region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${countryName}?fields=${this.fields}`).pipe(
      map((values: any[]) => values
        .filter((country: any) => country.region === region)
        .map((value: any) => this.mapApiResponseToCountry(value)))
    );
  }

  private mapApiResponseToCountry(value: any): Country {
    return {
      name: value.name,
      flag: value.flag,
      capital: value.capital,
      region: value.region,
      subregion: value.subregion,
      nativeName: value.nativeName,
      population: value.population,
      topLevelDomain: value.topLevelDomain,
      currencies: value.currencies?.map((currency: any) => currency.name),
      languages: value.languages?.map((language: any) => language.name),
      borders: value.borders
    };
  }

}
