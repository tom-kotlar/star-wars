import { Component, Input } from '@angular/core';
import { Serie } from '../../series/serie.model';
import { Movie } from "../../movies/movie.model";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Serie | Movie;
}
