import Country from 'src/app/shared/models/country';
import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MockComponent } from 'ng-mocks';
import { DetailComponent } from './detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent, MockComponent(MatIcon)],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location) as Location;

    spyOn(location, 'getState').and.returnValue({
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
      borders: [],
    } as Country);

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get country data from Location state', () => {
    expect(location.getState).toHaveBeenCalled();
  });
});
