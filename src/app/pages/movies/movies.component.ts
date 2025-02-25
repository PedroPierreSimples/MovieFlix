import { Component, OnInit} from '@angular/core';
import { BreadcrumComponent } from "../../components/breadcrum/breadcrum.component";
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movie.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-movies',
  imports: [BreadcrumComponent, CommonButtonComponent, MovieCardComponent, FormsModule, NgIf, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  page:number = 1
  filter:string = '';
  movies: Movie[] = [];
  language: string = '';

  constructor(private moviesService: MoviesService){}

  ngOnInit() {    
    this.populateMovies(this.language);

    this.moviesService.language$.subscribe((language) => {
      this.language = language;
      this.movies = [];

      this.populateMovies(this.language);
    });
  }

  populateMovies(language: string){
    this.moviesService.getPopularMovies(language, this.page).subscribe({
      next: (res) => {
        let oldMovies = this.movies;

        this.movies = [...oldMovies,...res.results]
        
        // this.movies = [...this.movies,...res.results];
      },
      error: (err) => {
        console.error(err);
      },
    })
  }
  
  filterMovies(filter: string) {
    return this.movies
    .filter(movie =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  get filteredMovies(): Movie[] {
    return this.filterMovies(this.filter);
  }

  seeMore() {
    
    this.page += 1;
    this.populateMovies(this.language);
    
  }


  
}
