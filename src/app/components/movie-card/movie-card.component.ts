import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../model/movie.model';
import { MoviesService } from '../../services/movies.service';
import { FavoriteService } from '../../services/favorite.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-movie-card',
  imports: [RouterLink, CommonModule, NgIf, DatePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie
  isFavoritado: boolean = false;
  language: string = 'pt-BR'

  constructor(private movieService: MoviesService, private apiService: ApiService) { }

  ngOnInit() {

    this.movieService.language$.subscribe((language) => {
      this.language = language;
    })
  }

  favoritar() {
    // this.isFavoritado = !this.isFavoritado;

    this.apiService.sendFavorites(this.movie).subscribe({
      next: (val: Movie) => {
        console.log(val)

      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
