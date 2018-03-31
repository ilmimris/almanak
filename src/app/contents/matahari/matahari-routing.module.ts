import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatahariComponent } from './matahari.component';

const routes: Routes = [
  {
    path: '',
    component: MatahariComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatahariRoutingModule { }
