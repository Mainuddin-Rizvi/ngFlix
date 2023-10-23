import { Movie, MoviesDto } from './../types/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { VideosDto } from '../types/video';

@Injectable()
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '606bb1999289eb80238ba12395b4496f'

  constructor(private http:HttpClient) {}

  getMoviesByType(type : string, count = 20){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
      ).pipe(map((data)=>data.results.slice(0,count)));
  }
  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }
  getMovieVideos(id: string) {
    return this.http
      .get<VideosDto>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results));
  }
}
