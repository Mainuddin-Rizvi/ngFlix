import { MoviesService } from 'src/app/services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  upcomingMovies$ = this.moviesService.getUpcomingMovies();

  constructor(private moviesService:MoviesService){}


}
