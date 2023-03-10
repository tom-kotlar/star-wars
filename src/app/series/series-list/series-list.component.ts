import { Component } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent {

  cardDetails!: Serie[]

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.read()
      .subscribe(  (series:Serie[]) => this.cardDetails = series)
  }

  trackById(index: number, value: Serie) {
    return value.id;
  }

}
