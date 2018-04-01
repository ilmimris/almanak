import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BerandaRoutingModule } from './beranda-routing.module';
import { BerandaComponent } from './beranda.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BerandaRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [BerandaComponent]
})
export class BerandaModule { }
