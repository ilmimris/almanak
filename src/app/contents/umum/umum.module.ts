import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmumRoutingModule } from './umum-routing.module';
import { UmumComponent } from './umum.component';

@NgModule({
  imports: [
    CommonModule,
    UmumRoutingModule
  ],
  declarations: [UmumComponent]
})
export class UmumModule { }
