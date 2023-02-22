import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }


  read() {
    return this.http.get<Movie[]>(`http://localhost:3000/movies`)
  }

 
}
