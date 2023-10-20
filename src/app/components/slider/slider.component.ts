import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  constructor(private http:HttpClient){}

  ngOnInit(): void {  //life cycle hook of components
    this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=606bb1999289eb80238ba12395b4496f'
      ).subscribe(data=>{
        console.log(data);

      })
  }
}
