import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MateriaModule } from './modules/materia/materia.module';

const commonDeclarations: any[] = [
  TopBarComponent,
];

@NgModule({
  declarations: [
    ...commonDeclarations
  ],
  imports: [
    CommonModule,
    MateriaModule
  ],
  exports: [
    ...commonDeclarations
  ]
})
export class SharedModule { }
