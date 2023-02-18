import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { MoviesListComponent } from './containers/movies-list/movies-list.component';



@NgModule({
  declarations: [
   MoviesListComponent, MovieCardComponent
  ],
  imports: [
    CommonModule, HttpClientModule, PrimeNgModule
  ],
  exports: [MoviesListComponent, MovieCardComponent],
})
export class MoviesModule { }
