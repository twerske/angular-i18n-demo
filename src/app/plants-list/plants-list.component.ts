import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plant, PLANTS } from 'src/app/Plant';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss']
})
export class PlantsListComponent implements OnInit {
  @Input() locale: string;
  @Output() selectPlant = new EventEmitter<Plant>();
  plants: Plant[] = [];

  constructor() {
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
    this.populatePlants();
  }

  ngOnInit(): void {
    this.selectPlant.emit(this.plants[0]);
  }

  populatePlants(): void {
    PLANTS.forEach(plant => {
      this.plants.push(plant);
    });
  }

}
