import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { IonicModule } from '@ionic/angular';

import { FollowOrderPageRoutingModule } from './follow-order-routing.module';

import { FollowOrderPage } from './follow-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowOrderPageRoutingModule,
    TranslateModule
  ],
  declarations: [FollowOrderPage]
})
export class FollowOrderPageModule {}
