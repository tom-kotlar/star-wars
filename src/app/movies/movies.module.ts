import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { MoviesListComponent } from './containers/movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MoviesListComponent},
];

@NgModule({
  declarations: [
   MoviesListComponent, MovieCardComponent
  ],
  imports: [
    CommonModule, PrimeNgModule, RouterModule.forChild(routes),
  ],
})
export class MoviesModule { }
