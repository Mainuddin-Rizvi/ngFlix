import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TvshowsDto } from '../types/tvshow';

@Injectable()
export class TvshowsService {

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '606bb1999289eb80238ba12395b4496f'

  constructor(private http:HttpClient) {}

  getTvShowsByType(type : string, count = 20){
    return this.http.get<TvshowsDto>(
      `${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`
      ).pipe(map((data)=>data.results.slice(0,count)));
  }
}
