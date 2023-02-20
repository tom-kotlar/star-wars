import { Injectable } from '@angular/core';
import { Serie } from './serie.model';
import { HttpClient } from '@angular/common/http';
import { map, of, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private series: Serie[] = []

  constructor(private http: HttpClient) { }

  read() {
    // if (this.series.length ) {
    //   return of(this.series);
    // }
    return this.http.get<Serie[]>(`http://localhost:3000/series`)
  }

  readOne(id: any) {
    return this.read()
    .pipe(
      map((series) => {
        const serie = series.find((serie: Serie) => serie.id === id);

    if (serie) {
      return serie;
    }

    return  { id: 0, story: '', title: '', release: 0,  seasons: 0, poster:'', infor: '', trailer: ''};

  })
  );
  }


  create(payload: Serie) {
    return this.http.post<Serie>(`http://localhost:3000/series`, payload)
    .pipe(
      tap((show) => {
        this.series = [...this.series, show];
      })
    );
  }

  update(payload: Serie) {
    this.series = this.series.map((serie: any) => {
      if (serie.id === payload.id) {
        return payload;
      }
      return serie;
    });
    console.log(this.series);
  }

  delete(payload: Serie) {
    this.series = this.series.filter((serie: any) => serie.id !== payload.id);
    console.log(this.series);
  }
}
