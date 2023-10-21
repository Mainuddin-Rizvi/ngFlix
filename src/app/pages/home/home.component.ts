import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming',12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated',12);
  popularTvShows$ = this.tvShowsService.getTvShowsByType('popular');

  constructor(private moviesService:MoviesService, private tvShowsService : TvshowsService) {}
}
