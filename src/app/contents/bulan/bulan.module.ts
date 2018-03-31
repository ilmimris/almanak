import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulanRoutingModule } from './bulan-routing.module';
import { BulanComponent } from './bulan.component';

@NgModule({
  imports: [
    CommonModule,
    BulanRoutingModule
  ],
  declarations: [BulanComponent]
})
export class BulanModule { }
