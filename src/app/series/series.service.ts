import { Injectable } from '@angular/core';
import { Serie } from './serie.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private series = [
  {
      id: 1,
      story:
          'After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.',
      title: 'The Mandalorian',
      release: 2019,
      seasons: 4,
      poster:
          'https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-poster-s3-serieslp_aa55f7a4.jpeg',
      info: 'https://www.starwars.com/series/the-mandalorian',
      trailer: 'https://www.youtube.com/embed/aOC8E8z_ifw',
  },
  {
      id: 2,
      story:
          'The Bad Batch follows the elite and experimental clones of the Bad Batch (first introduced in “The Clone Wars”) as they find their way in a rapidly changing galaxy in the immediate aftermath of the Clone War. Members of Bad Batch—a unique squad of clones who vary genetically from their brothers in the Clone Army—each possess a singular exceptional skill that makes them extraordinarily effective soldiers and a formidable crew.',
      title: 'Star Wars: The Bad Batch',
      release: 2021,
      seasons: 2,
      poster:
          'https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-key-art-s2-poster_119c999d.jpeg',
      info: 'https://www.starwars.com/series/star-wars-the-bad-batch',
      trailer: 'https://www.youtube.com/embed/BsOmYpP4UDU',
  },
 
  {
      id: 2,
      story:
          'The story begins 10 years after the dramatic events of “Star Wars: Revenge of the Sith” where Obi-Wan Kenobi faced his greatest defeat—the downfall and corruption of his best friend and Jedi apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader. The series stars Ewan McGregor, reprising his role as the iconic Jedi Master, and also marks the return of Hayden Christensen in the role of Darth Vader. Joining the cast are Moses Ingram, Joel Edgerton, Bonnie Piesse, Kumail Nanjiani, Indira Varma, Rupert Friend, O’Shea Jackson Jr., Sung Kang, Simone Kessell and Benny Safdie.',
      title: 'Obi-Wan Kenobi',
      release: 2022,
      seasons: 1,
      poster:
          'https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
      info: 'https://www.starwars.com/series/obi-wan-kenobi',
      trailer: 'https://www.youtube.com/embed/TWTfhyvzTx0',
  },
];

  constructor() { }

  read() {
    return this.series;
  }

  readOne(id: any) {
    const serie = this.read().find((serie: any) => serie.id === id);

    if (serie) {
      return serie;
    }

    return {};
  }


  create(payload: Serie) {
    this.series = [...this.series, payload];
    console.log(this.series);
  }

  update(payload: Serie) {
    this.series = this.series.map((movie: any) => {
      if (movie.id === payload.id) {
        return payload;
      }
      return movie;
    });
    console.log(this.series);
  }

  delete(payload: Serie) {
    this.series = this.series.filter((movie: any) => movie.id !== payload.id);
    console.log(this.series);
  }
}
