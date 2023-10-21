import { MoviesDto } from './../types/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '606bb1999289eb80238ba12395b4496f'

  constructor(private http:HttpClient) {}

  getMoviesByType(type : string){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
      );
  }
}
