import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies = [
    {
      "id": 1,
      "story": "Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi set out to stop the Trade Federation from invading Naboo. While travelling, they come across a gifted boy, Anakin, and learn that the Sith have returned.",
      "title": "EPISODE I",
      "name": "The Phantom Menace",
      "year": "1999",
      "duration": "2h 16m",
      "poster": "https://poducts.blob.core.windows.net/star-wars/images/the-phantom-menace.png",
      "info": "https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace",
      "trailer": "https://www.youtube.com/embed/bD7bpG-zDJQ"
  }, 
  {
      "id": 2,
      "story": "While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.",
      "title": "EPISODE II",
      "name": "Attack of the Clones",
      "year": "2002",
      "duration": "2h 22m",
      "poster": "https://poducts.blob.core.windows.net/star-wars/images/attack-of-the-clones.png",
      "info": "https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones",
      "trailer": "https://www.youtube.com/embed/gYbW1F_c9eM"
  },
  {
      "id": 3,
      "story": "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
      "title": "EPISODE III",
      "name": "Revenge of the Sith",
      "year": "2005",
      "duration": "2h 22m",
      "poster": "https://poducts.blob.core.windows.net/star-wars/images/revenge-of-the-sith.png",
      "info": "https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith",
      "trailer": "https://www.youtube.com/embed/5UnjrG_N8hU"
  }
  ]

  constructor() { }


  read() {
    return this.movies;
  }

  readOne(id: any) {
    const movie = this.read().find((movie: Movie) => movie.id === id);

    if (movie) {
      return movie;
    }

    return { name: '', icon: '', price: 0, description: '' };
  }

  create(payload: Movie) {
    this.movies = [...this.movies, payload];
    console.log(this.movies);
  }

  update(payload: Movie) {
    this.movies = this.movies.map((movie: Movie) => {
      if (movie.id === payload.id) {
        return payload;
      }
      return movie;
    });
    console.log(this.movies);
  }

  delete(payload: Movie) {
    this.movies = this.movies.filter((movie: Movie) => movie.id !== payload.id);
    console.log(this.movies);
  }
}