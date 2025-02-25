import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../@types/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-review',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-review.component.html',
  styleUrl: './user-review.component.scss'
})
export class UserReviewComponent implements OnInit{
  @Input() userDetails!: User;
  emailModel: string = '';
  nameModel: string = '';
  comentModel: string = '';
  reviewDateModel: string = '';
  ratingModel: number = 0;
  meuFormulario!: FormGroup;
  formInvalido: boolean = false;

  constructor(private apiService: ApiService, private router: ActivatedRoute) {
    // let getMovieId = Number(this.router.snapshot.paramMap.get('id'));
    //   this.meuFormulario = new FormGroup({
    //       email: new FormControl('', [Validators.required]),
    //       author: new FormControl('', [Validators.minLength(3), Validators.required]),
    //       reviewContent: new FormControl('', [Validators.required]),
    //       reviewDate: new FormControl(new Date()),
    //       watchedDate: new FormControl('', [Validators.required]),
    //       rating: new FormControl('', [Validators.required]),
    //       movieId: new FormControl([getMovieId])
    //     });
  }

  ngOnInit(): void {
    
    let getMovieId = Number(this.router.snapshot.paramMap.get('id'));
    this.meuFormulario = new FormGroup({
      email: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.minLength(3), Validators.required]),
      reviewContent: new FormControl('', [Validators.required]),
      reviewDate: new FormControl(new Date()),
      watchedDate: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
      movieId: new FormControl([getMovieId])
    });
    
    console.log(this.meuFormulario.get('name')?.invalid);

    this.meuFormulario.get('name')?.valueChanges.subscribe({
      next: (val) => {
        if (this.meuFormulario.get('name')?.errors) {
          console.log(this.meuFormulario.get('name')?.errors);
          this.formInvalido = true;
          console.log(val)
        } else {
          this.formInvalido = false;
        }
      },
    });
  }

  onSubmit() {
    console.log(' campo', this.meuFormulario.get('name'));
    console.log(this.meuFormulario);
  }

}
