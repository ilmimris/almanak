import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulanComponent } from './bulan.component';

const routes: Routes = [
  {
    path: '',
    component: BulanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulanRoutingModule { }
