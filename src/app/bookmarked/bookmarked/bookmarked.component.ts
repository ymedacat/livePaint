import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent implements OnInit {
			tiles = [
    { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'},
        { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
