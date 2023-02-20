import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from '../shared/primeng.module';

import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesFormComponent } from './series-form/series-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesCardComponent,
    SeriesDetailComponent,
    SeriesFormComponent,

  ],
  imports: [
    CommonModule, HttpClientModule, PrimeNgModule, FormsModule
  ],
  exports: [ SeriesListComponent, SeriesListComponent,  SeriesDetailComponent,
    SeriesFormComponent],
})
export class SeriesModule { }
