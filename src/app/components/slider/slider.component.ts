import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  movies : any;

  constructor(private http:HttpClient){}

  ngOnInit(){
   this.getPopularMovies();
  }

  getPopularMovies(){
    this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=606bb1999289eb80238ba12395b4496f'
      ).subscribe(data=>{
        this.movies = data;
      })
  }
}
