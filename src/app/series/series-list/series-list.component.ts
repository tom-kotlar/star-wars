import { Component } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent {

  series!: Serie[];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.series = this.seriesService.read();
  }

  trackById(index: number, value: Serie) {
    return value.id;
  }

}
