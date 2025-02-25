import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movie.model';
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BadgeComponent } from "../../components/badge/badge.component";
import { BreadcrumComponent } from '../../components/breadcrum/breadcrum.component';
import { CommonModule, DatePipe, DecimalPipe, SlicePipe } from '@angular/common';
import { Cast } from '../../@types/cast';
import { Credits } from '../../@types/credits';
import { Crew } from '../../@types/crew';
import { ModalCastComponent } from "../../components/modal-cast/modal-cast.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { ApiService } from '../../services/api.service';
import { User } from '../../@types/user';
import { UserReviewComponent } from "../../components/user-review/user-review.component";
import { ReviewCardComponent } from "../../components/review-card/review-card.component";
import Swiper from 'swiper';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-details',
  imports: [AvatarComponent, CommonButtonComponent, RouterModule, BadgeComponent, BreadcrumComponent, DatePipe, SlicePipe, ModalCastComponent, CommonModule, FormsModule, LanguageSelectorComponent, ReactiveFormsModule, UserReviewComponent, ReviewCardComponent, TranslatePipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieDetailsComponent implements OnInit {
  @ViewChild(ModalCastComponent) modal!: ModalCastComponent;
  movieCreditsDetails!: Credits;
  movieDetails!: Movie;
  directors: Crew[] = [];
  language: string = 'pt-BR';

  reviews: User[] = [];

  userDetails!: User;
  emailModel: string = '';
  nameModel: string = '';
  comentModel: string = '';
  reviewDateModel: string = '';
  ratingModel: number = 0;
  meuFormulario!: FormGroup;
  formInvalido: boolean = true;

  constructor(private apiService: ApiService, private moviesService: MoviesService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.moviesService.language$.subscribe((language) => {
      this.language = language
      this.loadMovieDetails()
    })

    this.loadMovieDetails();

    let getMovieId = Number(this.router.snapshot.paramMap.get('id'));

    this.meuFormulario = new FormGroup({
      email: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.minLength(3), Validators.maxLength(12), Validators.required]),
      reviewContent: new FormControl('', [Validators.minLength(10), Validators.required]),
      reviewDate: new FormControl(new Date(), [Validators.required]),
      watchedDate: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      movieId: new FormControl(Number(getMovieId), [Validators.required])
    });

    console.log(this.meuFormulario.get('author')?.invalid);

    this.meuFormulario.get('author')?.valueChanges.subscribe({
      next: (val) => {
        if (this.meuFormulario.get('author')?.errors) {
          // console.log(this.meuFormulario.get('author')?.errors);
          this.formInvalido = true;

        } else {
          this.formInvalido = false;
        }
      },
    });

  }

  onSubmit() {

    if(this.meuFormulario.invalid) {
      alert("Avaliação inválida")
    } else {
      alert("Avaliação enviada!")
    }

    this.apiService.sendReview(this.meuFormulario.value).subscribe({
      next: (val: User) => {
        console.log(val)
        this.meuFormulario.reset()
      },
      error: (err) => {
        console.error(err)
      }
    })

    console.log(this.meuFormulario);
  }

  openModal() {
    this.modal.openModal();
    console.log(this.language)
  }

  // dateAfterReleased(){
    
  // }

  // dateBeforeToday(){

  // }


  loadMovieDetails(): void {
    let movieId = Number(this.router.snapshot.paramMap.get('id'));

    this.moviesService.getCreditsByMovieId(this.language, movieId).subscribe({
      next: (res) => {
        this.movieCreditsDetails = res;
        this.getDirectors();
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.moviesService.getMovieById(this.language, movieId).subscribe({
      next: (res) => {
        this.movieDetails = res;
        console.log(res)
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.apiService.getReviewById(movieId).subscribe({
      next: (values) => {
        this.reviews = [...this.reviews, ...values]

        console.log(values);
      },
      error: (err) => {
        console.error("Erro em buscar as reviews", err)
      }

    })

  }

  getDirectors() {
    this.directors = this.movieCreditsDetails.crew.filter((p) => p.job == 'Director');
  }

}
