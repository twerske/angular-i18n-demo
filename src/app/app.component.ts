import { Component, OnInit } from '@angular/core';
import { LOCALE_ID, Inject } from '@angular/core';
import { Plant } from './Plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  today: Date;
  favoritePlant?: Plant;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
    this.today = new Date();
    console.log(this.locale);
  }

  selectPlant(plant: Plant): void {
    this.favoritePlant = plant;
  }
}
