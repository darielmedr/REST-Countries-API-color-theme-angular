import Country from 'src/app/shared/models/country';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { DetailComponent } from 'src/app/feature/detail/detail.component';
import { CountryCardComponent } from 'src/app/feature/home/components/country-card/country-card.component';
import { CountriesComponent } from './countries.component';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let location: Location;

  let mockCountries: Country[] = [
    { name: 'A', region: 'A region' } as Country,
    { name: 'B', region: 'B region' } as Country,
    { name: 'C', region: 'C region' } as Country,
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountriesComponent,
        MockComponent(CountryCardComponent)
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'detail', component: DetailComponent }
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;

    // set #countries with mock data for all tests
    component.countries = mockCountries;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 <app-country-card>', () => {
    const expectedLength = 3;

    const cardElements = fixture.debugElement.queryAll(By.css('app-country-card'));

    expect(cardElements.length).toBe(expectedLength);
  });

  it("should navigate to 'detail' when click on <app-country-card>", fakeAsync(() => {
    const expectedPath = '/detail';

    const cardElement = fixture.debugElement.query(By.css('app-country-card'));
    cardElement.nativeElement.click();

    fixture.detectChanges();
    tick();

    expect(location.path()).toBe(expectedPath);
  }));
});
