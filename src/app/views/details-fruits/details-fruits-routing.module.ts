import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsFruitsPage } from './details-fruits.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsFruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsFruitsPageRoutingModule {}
