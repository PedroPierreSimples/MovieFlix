import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BreadcrumComponent } from "../../components/breadcrum/breadcrum.component";
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movie.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  imports: [BreadcrumComponent, LanguageSelectorComponent, TranslatePipe, CommonModule, CommonButtonComponent, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit{

  public currentLang = 'PT';
  topRatedMovies: Movie[] = [];
  favoriteMovies: Movie[] = [];
  page: number = 1
  language: string = '';

  
  constructor(private moviesService: MoviesService, private apiService: ApiService, private router: ActivatedRoute){}

  ngOnInit() {    
    this.loadFavoriteMovies();
    this.populateTopRatedMovies(this.language)
  }

  loadFavoriteMovies() {
    let movieId = Number(this.router.snapshot.paramMap.get('id'));

    this.apiService.getFavorites().subscribe({
      next: (values) => {
        this.favoriteMovies = [...this.favoriteMovies, ...values]

        console.log(values);
      },
      error: (err) => {
        console.error("Erro em buscar as reviews", err)
      }

    })
  }

  populateTopRatedMovies(language: string){
    this.moviesService.getTopRatedMovies(language, this.page).subscribe({
      next: (res) => {
        let oldMovies = this.topRatedMovies;

        this.topRatedMovies = [...oldMovies,...res.results]
        
        // this.movies = [...this.movies,...res.results];
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  seeMore() {
    
    this.page += 1;
    this.populateTopRatedMovies(this.language);
    
  }

}
