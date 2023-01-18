import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paiement1Page } from './paiement1.page';

const routes: Routes = [
  {
    path: '',
    component: Paiement1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paiement1PageRoutingModule {}
