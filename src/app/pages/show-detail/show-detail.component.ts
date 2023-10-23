import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit{

  showId = '';

  show$: Observable<Movie> | null = null;
  constructor(private router: ActivatedRoute,private moviesService : MoviesService){}
  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   console.log(params);
    //   this.showId = params['id'];
    // });

    this.showId = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.showId);
  }


}
