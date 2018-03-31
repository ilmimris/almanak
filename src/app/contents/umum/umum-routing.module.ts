import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UmumComponent } from './umum.component';

const routes: Routes = [
  {
    path: '',
    component: UmumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmumRoutingModule { }
