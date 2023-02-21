import { Injectable } from '@angular/core';
import { Serie } from './serie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, pipe, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private series: Serie[] = [];

  constructor(private http: HttpClient) {}

  read() {
    return this.http.get<Serie[]>(`http://localhost:3000/series`);

    // if (this.series.length) {
    //   return of(this.series);
    // }

    // return this.http.get<Serie[]>(`http://localhost:3000/series`).pipe(
    //   tap((show) => {
    //     this.series = show;
    //   }),
    //   catchError(this.handleError)
    // );
  }

  readOne(id: any) {
    return this.read().pipe(
      map((series) => {
        const serie = series.find((serie: Serie) => serie.id === id);

        if (serie) {
          return serie;
        }

        return {
          id: 0,
          story: '',
          title: '',
          release: 0,
          seasons: 0,
          poster: '',
          infor: '',
          trailer: '',
        };
      })
    );
  }

  create(payload: Serie) {
    return this.http.post<Serie>(`http://localhost:3000/series`, payload).pipe(
      tap((show) => {
        this.series = [...this.series, show];
      }),
      catchError(this.handleError)
    );
  }

  update(payload: Serie) {
    return this.http
      .put<Serie>(`http://localhost:3000/series/${payload.id}`, payload)
      .pipe(
        tap((show) => {
          this.series = this.series.map((item: Serie) => {
            if (item.id === show.id) {
              return show;
            }
            return item;
          });
          catchError(this.handleError);
        })
      );
  }

  delete(payload: Serie) {
    return this.http
      .delete<Serie>(`http://localhost:3000/series/${payload.id}`)
      .pipe(
        tap(() => {
          this.series = this.series.filter(
            (show: Serie) => show.id !== payload.id
          );
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // client-side
      console.warn('Client', err.message);
    } else {
      // server-side
      console.warn('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
