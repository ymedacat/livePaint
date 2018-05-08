import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	tiles = [
    { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 2, rows: 1, img:'assets/img/sky.jpg'},
    { cols: 3, rows: 1, img:'assets/img/sky.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 2, rows: 1, img:'assets/img/sky.jpg'},
    { cols: 3, rows: 1, img:'assets/img/sky.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 2, rows: 1, img:'assets/img/sky.jpg'},
    { cols: 3, rows: 1, img:'assets/img/sky.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
