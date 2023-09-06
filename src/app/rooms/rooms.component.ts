import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'namsasa';

  rooms: number = 10;

  constructor() {}

  // implement OnInit's `ngOnInit` method
  ngOnInit(): void {}
}
