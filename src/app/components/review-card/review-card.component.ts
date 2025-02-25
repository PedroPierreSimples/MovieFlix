import { AfterViewInit, Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { User } from '../../@types/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewCardComponent implements AfterViewInit, OnInit {
  @Input() users: User[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getReviewById().subscribe({
    //   next: (values) => console.log(values),
    // });

    // this.apiService.sendReview().subscribe({
    //   next: (val: User) => {
    //     let oldUsers = this.users;

    //     this.users = [...oldUsers,...val]

    //     this.users = val;
    //     console.log(val)
    //   },
    // })
  }


  ngAfterViewInit(): void {

    // new Swiper(".mySwiper", {
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
  }



}
