import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  addFavorite(movie: Movie) {
    let favorites = this.getFavorites();
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  getFavorites(): Movie[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites): [];
  }

  // removeFavorites(movieId: number) {
  //   let favorites = this.getFavorites();
  //   const index = favorites.indexOf(movieId);

  //   if(index !== -1) {
  //     favorites.splice(index, 1);
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }
  // }
}
