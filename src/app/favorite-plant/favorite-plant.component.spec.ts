import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlantComponent } from './favorite-plant.component';

describe('FavoritePlantComponent', () => {
  let component: FavoritePlantComponent;
  let fixture: ComponentFixture<FavoritePlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
