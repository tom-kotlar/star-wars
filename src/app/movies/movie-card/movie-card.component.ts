import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Serie } from '../../series/serie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
