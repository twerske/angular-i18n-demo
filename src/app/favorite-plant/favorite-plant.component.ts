import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Plant } from '../Plant';

@Component({
  selector: 'app-favorite-plant',
  templateUrl: './favorite-plant.component.html',
  styleUrls: ['./favorite-plant.component.scss']
})
export class FavoritePlantComponent implements OnInit, OnChanges {
  @Input() plant?: Plant;
  @Input() locale: string;

  favorite: string;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.favorite = $localize `My favorite plant is ${this.plant?.name}!`;
  }
}
