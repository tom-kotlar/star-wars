import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent implements OnInit {
  serie!: any;
  isEdit!: boolean;

  constructor(
    private router: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
   
    this.serie = this.seriesService
      .readOne(id)
      .subscribe((serie: Serie | any) => (this.serie = serie));

      this.isEdit  = this.router.snapshot.data['isEdit']
  }

  onCreate(show: Serie) {
    this.seriesService
      .create(show)
      .subscribe(() => console.log('Created successfully!'));
  }

  onUpdate(serie: Serie) {
    this.seriesService.update(serie).subscribe({
      next: () => console.log('Updated successfully!'),
      error: (err) => console.log('onUpdate error:', err),
    });
  }

  onDelete(serie: Serie) {
    this.seriesService
      .delete(serie)
      .subscribe(() => console.log('Deleted successfully!'));
  }
}
