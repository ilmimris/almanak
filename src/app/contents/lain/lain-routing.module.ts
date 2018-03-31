import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferensiComponent } from './referensi/referensi.component';
import { GlosariumComponent } from './glosarium/glosarium.component';
import { KonstantaComponent } from './konstanta/konstanta.component';

const routes: Routes = [
  {
    path: 'refs',
    component: ReferensiComponent
  },
  {
    path: 'glos',
    component: GlosariumComponent
  },
  {
    path: 'konstanta',
    component: KonstantaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LainRoutingModule { }
