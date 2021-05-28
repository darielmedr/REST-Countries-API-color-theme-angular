import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search/search.component';
import { MateriaModule } from 'src/app/shared/modules/materia/materia.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CountriesComponent,
    CountryCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MateriaModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CountryService
  ]
})
export class HomeModule { }
