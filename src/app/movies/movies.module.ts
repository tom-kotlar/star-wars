import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './containers/movie-card/movie-card.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { MoviesListComponent } from './containers/movies-list/movies-list.component';



@NgModule({
  declarations: [
    MovieCardComponent, MoviesListComponent
  ],
  imports: [
    CommonModule, FormsModule, HttpClientModule, PrimeNgModule
  ],
  exports: [MovieCardComponent, MoviesListComponent],
})
export class MoviesModule { }
