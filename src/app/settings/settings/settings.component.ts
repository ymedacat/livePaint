import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

		tiles = [
    { cols: 1, rows: 1,img:'assets/img/cat.jpg'},
    { cols: 1, rows: 1, img:'assets/img/woman.jpeg'},
    { cols: 1, rows: 1, img:'assets/img/sea.jpg'}
  ];


  constructor() { }

  ngOnInit() {
  }



}
