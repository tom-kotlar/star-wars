import { Component, Input } from '@angular/core';
import { Serie } from '../serie.model';

@Component({
  selector: 'series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss']
})
export class SeriesCardComponent {
  @Input() series!: Serie;
}
