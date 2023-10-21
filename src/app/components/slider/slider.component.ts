import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  constructor(private moviesService: MoviesService){}


  movies$ = this.moviesService.getPopularMovies();

  slideIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex += 1
    },5000)
  }
}
