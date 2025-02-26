
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../@types/user';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  private httpOptionsDefault = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public getReviewById(movieId: number): Observable<User[]> {
    let params = new HttpParams();


    return this.http.get<User[]>(
      `${this.apiUrl}/reviews/?movieId=${movieId}`
    );
  }

  public sendReview(review: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/reviews`, { ...review });
  }

  public sendFavorites(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}/favorites`, { ...movie });
  }

  public getFavorites(): Observable<Movie[]> {
    let params = new HttpParams();
    return this.http.get<Movie[]>(`${this.apiUrl}/favorites/`);
  }

  public removeFavorites(movieId: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}/${movieId}`);
  }
}
