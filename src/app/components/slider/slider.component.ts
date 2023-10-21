import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),  ]
})
export class SliderComponent implements OnInit{

  constructor(private moviesService: MoviesService){}


  movies$ = this.moviesService.getMoviesByType('popular');

  slideIndex = 0;

  imagesBaseUrl = imagesBaseUrl;

  ngOnInit(): void {
    this.changeSlide();
  }

  changeSlide(){
    setInterval(() => {
      this.slideIndex += 1
      if(this.slideIndex>10){
        this.slideIndex = 0;
      }
    },5000)
  }
}
