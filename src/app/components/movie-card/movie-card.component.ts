import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../model/movie.model';
import { MoviesService } from '../../services/movies.service';
import { FavoriteService } from '../../services/favorite.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-movie-card',
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie
  isFavoritado: boolean = false;
  language: string = 'pt-BR'

  constructor(private movieService: MoviesService, private apiService: ApiService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.movieService.language$.subscribe((language) => {
      this.language = language;
    })
  }

  favoritar() {
    this.apiService.sendFavorites(this.movie).subscribe({
      next: (val: Movie) => {
        console.log(val)
        this.isFavoritado = true
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  desfavoritar() {
    let movieId = Number(this.router.snapshot.paramMap.get('id'));

    this.apiService.removeFavorites(movieId).subscribe({
      next: (val: Movie) => {
        console.log(val)
        this.isFavoritado = false
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  toggleFavorito() {
    if (this.isFavoritado) {
      this.desfavoritar();
    } else {
      this.favoritar();
    }
  }

}
