import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AllOrdersPageRoutingModule } from './all-orders-routing.module';

import { AllOrdersPage } from './all-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOrdersPageRoutingModule,
    TranslateModule
  ],
  declarations: [AllOrdersPage]
})
export class AllOrdersPageModule {}
