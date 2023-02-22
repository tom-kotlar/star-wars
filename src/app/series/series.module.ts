import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../shared/primeng.module';

import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesFormComponent } from './series-form/series-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: SeriesListComponent },
  { path: 'new', component: SeriesDetailComponent, data: { isEdit: false } },
  { path: ':id', component: SeriesDetailComponent, data: { isEdit: true } },
];

@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesCardComponent,
    SeriesDetailComponent,
    SeriesFormComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SeriesModule { }
