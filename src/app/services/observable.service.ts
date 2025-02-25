import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { MovieList } from '../@types/movieList';
import { Credits } from '../@types/credits';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  // private apiUrl = 'https://api.themoviedb.org/3/movie';

  // private httpOptionsDefault = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
  
  // public languageSubject = new Subject<string>();
  // language$ = this.languageSubject.asObservable();

  // private defaultHeaders = {
  //   Authorization: 'Bearer ' + environment.apiKey,
    
  // };

  // constructor(private http: HttpClient) { }

  // public getPopularMovies(language: string, page: number): Observable<MovieList> {
  //   let params = new HttpParams();
  //   params = params.set('language', language);
  //   params = params.set('page', page);

  //   return this.http.get<MovieList>(`${this.apiUrl}/popular`, {
  //     params: params,
  //     headers: this.defaultHeaders,
  //   });
  // }

  // public getCreditsByMovieId(language: string, id: number): Observable<Credits> {
  //   let params = new HttpParams();
  //   params = params.set('language', language);

  //   return this.http.get<Credits>(`${this.apiUrl}/${id}/credits`, {
  //     params: params,
  //     headers: this.defaultHeaders,
  //   });
  // }

  // public getMovieById(language: string, id: number): Observable<Movie> {
  //   let params = new HttpParams();
  //   params = params.set('language', language);

  //   return this.http.get<Movie>(`${this.apiUrl}/${id}`, {
  //     params: params,
  //     headers: this.defaultHeaders,
  //   });
  // }

  // switchLanguage(language:string){
  //   this.languageSubject.next(language);
  // }

  
  // // public sendToFavorites(movie: Movie): Observable<Movie> {
  // //   return this.http.post<Movie>(this.apiFavoriteUrl, movie);
  // // }



}
