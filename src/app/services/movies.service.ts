import { MoviesDto } from './../types/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private http:HttpClient) {}

  getPopularMovies(){
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=606bb1999289eb80238ba12395b4496f'
      );
  }
}
