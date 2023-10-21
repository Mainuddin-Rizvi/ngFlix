import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent{

  constructor(private moviesService: MoviesService){}

  movies$ = this.moviesService.getPopularMovies();
}
