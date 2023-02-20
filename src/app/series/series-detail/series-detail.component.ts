import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  serie!: any;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {

  this.serie = this.seriesService.readOne('OB22').subscribe((serie: Serie | any) => this.serie = serie)
}


  onCreate(show: Serie) {
    this.seriesService.create(show).subscribe(() => console.log('Created successfully!'))
  }



  onUpdate(serie: Serie) {
    this.seriesService.update(serie);
  }

  onDelete(serie: Serie) {
    this.seriesService.delete(serie);
  }
}
