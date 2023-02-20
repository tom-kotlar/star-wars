import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit  {
  movies!: Movie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.read().subscribe(  (series:Movie[]) => this.movies = series);
  }

  trackById(index: number, value: Movie) {
    return value.id;
  }
}
