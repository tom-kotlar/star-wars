import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit  {
  cardDetails!: Movie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.read()
      .subscribe(  (movie: Movie[]) => this.cardDetails = movie);
  }

  trackById(index: number, value: Movie) {
    return value.id;
  }
}
