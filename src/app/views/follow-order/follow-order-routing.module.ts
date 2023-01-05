import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowOrderPage } from './follow-order.page';

const routes: Routes = [
  {
    path: '',
    component: FollowOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowOrderPageRoutingModule {}
