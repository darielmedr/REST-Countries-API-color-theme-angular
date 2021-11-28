import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockProvider } from 'ng-mocks';
import { EMPTY } from 'rxjs';
import { CountriesComponent } from './components/countries/countries.component';
import { SearchComponent } from './components/search/search.component';

import { HomeComponent } from './home.component';
import { CountryService } from './services/country.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ...MockComponents(
          CountriesComponent,
          SearchComponent
        )
      ],
      providers: [
        MockProvider(CountryService, {
          getCountries: () => EMPTY
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
