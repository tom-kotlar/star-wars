import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from '../shared/primeng.module';

import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesCardComponent } from './series-card/series-card.component';


@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesCardComponent,

  ],
  imports: [
    CommonModule, HttpClientModule, PrimeNgModule
  ],
  exports: [ SeriesListComponent, SeriesListComponent],
})
export class SeriesModule { }
