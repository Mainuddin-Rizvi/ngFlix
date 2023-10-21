import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  movies : any;

  constructor(private moviesService: MoviesService){}

  ngOnInit(){
   this.getPopularMovies();
  }

  getPopularMovies(){
    this.moviesService.getPopularMovies().subscribe(data=>{
        this.movies = data;
      })
  }
}
