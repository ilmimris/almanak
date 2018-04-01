import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LainRoutingModule } from './lain-routing.module';
import { KonstantaComponent } from './konstanta/konstanta.component';
import { GlosariumComponent } from './glosarium/glosarium.component';
import { ReferensiComponent } from './referensi/referensi.component';
import { LainComponent } from './lain.component';

@NgModule({
  imports: [
    CommonModule,
    LainRoutingModule
  ],
  declarations: [LainComponent, KonstantaComponent, GlosariumComponent, ReferensiComponent, LainComponent]
})
export class LainModule { }
