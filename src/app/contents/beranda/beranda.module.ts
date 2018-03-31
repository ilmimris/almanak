import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerandaRoutingModule } from './beranda-routing.module';
import { BerandaComponent } from './beranda.component';

@NgModule({
  imports: [
    CommonModule,
    BerandaRoutingModule
  ],
  declarations: [BerandaComponent]
})
export class BerandaModule { }
