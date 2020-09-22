import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl);
import localeDa from '@angular/common/locales/da';
registerLocaleData(localeDa);

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantCardComponent } from './plants-list/plant-card/plant-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritePlantComponent } from './favorite-plant/favorite-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    PlantCardComponent,
    FavoritePlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'EN' // 'de-DE' for Germany, 'fr-FR' for France ...
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
