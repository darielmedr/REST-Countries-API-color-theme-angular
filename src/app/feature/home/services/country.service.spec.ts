import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CountryService } from './country.service';
import CountrySearch from '../models/country-search';
import Country from 'src/app/shared/models/country';

describe('CountryService', () => {
  let service: CountryService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const baseUrl = 'https://restcountries.com/v2';
  const fields = 'name,flag,capital,region,subregion,nativeName,population,topLevelDomain,currencies,languges,borders';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        CountryService
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(CountryService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#getDefaultCountry() should return a default Country object", () => {
    const expectedValue: Country = {
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

    const result = service.getDefaultCountry();

    expect(result).toEqual(expectedValue);
  });

  it("#addSearch() should push next value to #searchSubject$", () => {
    const mockValue: CountrySearch = {
      countryName: 'mock country name',
      region: 'Europe',
    };

    const spy = spyOn(service['searchSubject$'], 'next');
    service.addSearch(mockValue);

    expect(spy).toHaveBeenCalledWith(mockValue);
  });

  describe("#getCountries()", () => {
    describe("get countries by 'region'", () => {
      const mockSearchByRegion = {
        countryName: '',
        region: 'Europe'
      } as CountrySearch;

      it("should call http GET method of 'region' endpoint url", fakeAsync(() => {
        service.addSearch(mockSearchByRegion);
        service.getCountries().subscribe();
        tick(500);

        const expectedUrl = `${baseUrl}/region/${mockSearchByRegion.region}?fields=${fields}`;
        const req = httpTestingController.expectOne(expectedUrl);

        expect(req.request.method).toEqual('GET');
      }));

      it('should map result to Country objects', fakeAsync(() => {
        const mockCountries: any[] = [
          {
            name: 'A',
            flag: 'A flag',
            capital: 'A capital',
            region: 'A region',
            subregion: 'A subregion',
            nativeName: 'A nativeName',
            population: 1000,
            topLevelDomain: ['A topLevelDomain'],
            currencies: [{ name: 'A currency' }],
            languages: [{ name: 'A language' }],
            borders: ['A borders'],
          },
        ];
        const expectedCountries: Country[] = [
          {
            name: 'A',
            flag: 'A flag',
            capital: 'A capital',
            region: 'A region',
            subregion: 'A subregion',
            nativeName: 'A nativeName',
            population: 1000,
            topLevelDomain: ['A topLevelDomain'],
            currencies: ['A currency'],
            languages: ['A language'],
            borders: ['A borders'],
          } as Country,
        ];

        service.addSearch(mockSearchByRegion);

        service.getCountries().subscribe((data: Country[]) => {
          expect(data).toEqual(expectedCountries);
        });

        tick(500);

        const expectedUrl = `${baseUrl}/region/${mockSearchByRegion.region}?fields=${fields}`;
        const req = httpTestingController.expectOne(expectedUrl);

        req.flush(mockCountries);
      }));
    });

    describe("get countries by 'name' and filter by region", () => {
      const mockSearchByName = {
        countryName: 'mock country name',
        region: 'Europe'
      } as CountrySearch;

      it("should call http GET method of 'name' endpoint url", fakeAsync(() => {
        service.addSearch(mockSearchByName);
        service.getCountries().subscribe();
        tick(500);

        const expectedUrl = `${baseUrl}/name/${mockSearchByName.countryName}?fields=${fields}`;
        const req = httpTestingController.expectOne(expectedUrl);

        expect(req.request.method).toEqual('GET');
      }));

      it("should filter by 'region'='Europe' and map result to Country objects", fakeAsync(() => {
        const mockCountries: any[] = [
          {
            name: 'A',
            flag: 'A flag',
            capital: 'A capital',
            region: 'Europe',
            subregion: 'A subregion',
            nativeName: 'A nativeName',
            population: 1000,
            topLevelDomain: ['A topLevelDomain'],
            currencies: [{ name: 'A currency' }],
            languages: [{ name: 'A language' }],
            borders: ['A borders'],
          },
          {
            name: 'B',
            flag: 'B flag',
            capital: 'B capital',
            region: 'B region',
            subregion: 'B subregion',
            nativeName: 'B nativeName',
            population: 1000,
            topLevelDomain: ['B topLevelDomain'],
            currencies: [{ name: 'B currency' }],
            languages: [{ name: 'B language' }],
            borders: ['B borders'],
          },
        ];
        const expectedCountries: Country[] = [
          {
            name: 'A',
            flag: 'A flag',
            capital: 'A capital',
            region: 'Europe',
            subregion: 'A subregion',
            nativeName: 'A nativeName',
            population: 1000,
            topLevelDomain: ['A topLevelDomain'],
            currencies: ['A currency'],
            languages: ['A language'],
            borders: ['A borders'],
          } as Country,
        ];

        service.addSearch(mockSearchByName);

        service.getCountries().subscribe((data: Country[]) => {
          expect(data).toEqual(expectedCountries);
        });

        tick(500);

        const expectedUrl = `${baseUrl}/name/${mockSearchByName.countryName}?fields=${fields}`;
        const req = httpTestingController.expectOne(expectedUrl);

        req.flush(mockCountries);
      }));
    });
  });
});
