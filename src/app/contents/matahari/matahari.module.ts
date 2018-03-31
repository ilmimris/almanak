import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatahariRoutingModule } from './matahari-routing.module';
import { MatahariComponent } from './matahari.component';

@NgModule({
  imports: [
    CommonModule,
    MatahariRoutingModule
  ],
  declarations: [MatahariComponent]
})
export class MatahariModule { }
