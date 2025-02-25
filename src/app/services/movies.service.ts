import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Credits } from '../@types/credits';
import { Crew } from '../@types/crew';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { MovieList } from '../@types/movieList';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesShown: Movie[] = [];
  movies: Movie[] = [];
  filter: string = '';
  directors!: Crew[];
  movieCreditsDetails!: Credits;

  private apiUrl = 'https://api.themoviedb.org/3/movie';

  private httpOptionsDefault = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  public languageSubject = new Subject<string>();
  language$ = this.languageSubject.asObservable();

  private defaultHeaders = {
    Authorization: 'Bearer ' + environment.apiKey,
    
  };

  constructor(private http: HttpClient){}

  getMovies() {
    return this.movies;
  }

  filteredMovies(filter: string, qtyItems: number) {
    return this.movies.slice(0, qtyItems)
      .filter(movie =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      );
  }

   public getPopularMovies(language: string, page: number): Observable<MovieList> {
      let params = new HttpParams();
      params = params.set('language', language);
      params = params.set('page', page);
  
      return this.http.get<MovieList>(`${this.apiUrl}/popular`, {
        params: params,
        headers: this.defaultHeaders,
      });
    }
  
    public getCreditsByMovieId(language: string, id: number): Observable<Credits> {
      let params = new HttpParams();
      params = params.set('language', language);
  
      return this.http.get<Credits>(`${this.apiUrl}/${id}/credits`, {
        params: params,
        headers: this.defaultHeaders,
      });
    }
  
    public getMovieById(language: string, id: number): Observable<Movie> {
      let params = new HttpParams();
      params = params.set('language', language);
  
      return this.http.get<Movie>(`${this.apiUrl}/${id}`, {
        params: params,
        headers: this.defaultHeaders,
      });
    }
  
    switchLanguage(language:string){
      this.languageSubject.next(language);
    }
  

}


// movies: Movie[] = [
//   {
//     id: 1,
//     imagem: "./img/Film.png",
//     titulo: "Megatubarão 2",
//     data: "02 de agosto de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: true
//   },
//   {
//     id: 2,
//     imagem: "./img/Film (1).png",
//     titulo: "Elementos",
//     data: "14 de junho de 2023",
//     imagemFav: "./img/VectorNaoFav.png",
//     fav: false
//   },
//   {
//     id: 3,
//     imagem: "./img/Film (2).png",
//     titulo: "Agente Stone",
//     data: "09 de agosto de 2023",
//     imagemFav: "./img/VectorNaoFav.png",
//     fav: true
//   },
//   {
//     id: 4,
//     imagem: "./img/Film (3).png",
//     titulo: "Indiana Jones",
//     data: "28 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   },
//   {
//     id: 5,
//     imagem: "./img/Film (4).png",
//     titulo: "Barbie",
//     data: "19 de julho de 2023",
//     imagemFav: "./img/VectorNaoFav.png",
//     fav: false
//   },
//   {
//     id: 6,
//     imagem: "./img/Film (5).png",
//     titulo: "Homem aranha",
//     data: "31 de maio de 2023",
//     imagemFav: "./img/VectorNaoFav.png",
//     fav: true
//   },
//   {
//     id: 7,
//     imagem: "./img/Film (6).png",
//     titulo: "The flash",
//     data: "13 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   },
//   {
//     id: 8,
//     imagem: "./img/Film (7).png",
//     titulo: "Transformers",
//     data: "6 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: true
//   },
//   {
//     id: 9,
//     imagem: "./img/Film (6).png",
//     titulo: "The flash",
//     data: "13 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   },
//   {
//     id: 10,
//     imagem: "./img/Film (7).png",
//     titulo: "Transformers",
//     data: "6 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: true
//   },
//   {
//     id: 11,
//     imagem: "./img/Film (5).png",
//     titulo: "Homem aranha",
//     data: "31 de maio de 2023",
//     imagemFav: "./img/VectorNaoFav.png",
//     fav: false
//   },
//   {
//     id: 12,
//     imagem: "./img/Film (6).png",
//     titulo: "The flash",
//     data: "13 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   },
//   {
//     id: 13,
//     imagem: "./img/Film (7).png",
//     titulo: "Transformers",
//     data: "6 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: true
//   },
//   {
//     id: 14,
//     imagem: "./img/Film (6).png",
//     titulo: "The flash",
//     data: "13 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   },
//   {
//     id: 15,
//     imagem: "./img/Film (7).png",
//     titulo: "Transformers",
//     data: "6 de junho de 2023",
//     imagemFav: "./img/VectorFav.png",
//     fav: false
//   }
// ];