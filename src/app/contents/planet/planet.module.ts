import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetComponent } from './planet.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetRoutingModule
  ],
  declarations: [PlanetComponent]
})
export class PlanetModule { }
