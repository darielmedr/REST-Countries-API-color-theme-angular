import Country from 'src/app/shared/models/country';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule, MockProvider } from 'ng-mocks';
import { CountryCardComponent } from './country-card.component';
import { MatCardModule } from '@angular/material/card';
import { CountryService } from '../../services/country.service';

describe('CountryCardComponent', () => {
  let component: CountryCardComponent;
  let fixture: ComponentFixture<CountryCardComponent>;

  let countryServiceSpy: jasmine.SpyObj<CountryService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountryCardComponent
      ],
      imports: [
        MockModule(MatCardModule)
      ],
      providers: [
        MockProvider(CountryService)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    countryServiceSpy = TestBed.inject(CountryService) as jasmine.SpyObj<CountryService>;

    countryServiceSpy.getDefaultCountry.and.returnValue({} as Country);

    fixture = TestBed.createComponent(CountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
