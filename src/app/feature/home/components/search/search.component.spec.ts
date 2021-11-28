import { MockDirective, MockModule, MockProvider } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CountryService } from '../../services/country.service';
import { MatSelectModule } from '@angular/material/select';
import { FormControlDirective } from '@angular/forms';
import CountrySearch from '../../models/country-search';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let countryServiceSpy: jasmine.SpyObj<CountryService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        MockDirective(FormControlDirective)
      ],
      providers: [
        MockProvider(CountryService)
      ],
      imports: [
        MockModule(MatSelectModule),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    countryServiceSpy = TestBed.inject(CountryService) as jasmine.SpyObj<CountryService>;

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#search() should call #countryService.addSearch() with arg value of #searchField and #filter', () => {
    component.searchField.setValue('mock search');
    component.filter.setValue('Europe');

    const expectedValue: CountrySearch = {
      countryName: 'mock search',
      region: 'Europe'
    };

    component.search();

    expect(countryServiceSpy.addSearch).toHaveBeenCalledWith(expectedValue);
  });

  it('#regionChanged() should call #countryService.addSearch() with arg value of #searchField and input arg', () => {
    component.searchField.setValue('mock search');
    const mockRegion = 'Europe';

    const expectedValue: CountrySearch = {
      countryName: 'mock search',
      region: 'Europe'
    };

    component.regionChanged(mockRegion);

    expect(countryServiceSpy.addSearch).toHaveBeenCalledWith(expectedValue);
  });

  it('should call #search() on input events', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));

    const spy = spyOn(component, 'search');

    inputElement.triggerEventHandler('input', null);

    expect(spy).toHaveBeenCalled();
  });

  it('should call #regionChanged() on input events', () => {
    const matSelectElement = fixture.debugElement.query(By.css('mat-select'));

    const spy = spyOn(component, 'regionChanged').and.callThrough();
    const mockValue = 'mock event value';

    matSelectElement.triggerEventHandler('valueChange', mockValue);

    expect(spy).toHaveBeenCalledWith(mockValue);
  });
});
