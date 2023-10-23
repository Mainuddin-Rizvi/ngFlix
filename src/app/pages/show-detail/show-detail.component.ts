import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit{

  showId = 0;
  constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   console.log(params);
    //   this.showId = params['id'];
    // });

    this.showId = this.router.snapshot.params['id']
  }


}
