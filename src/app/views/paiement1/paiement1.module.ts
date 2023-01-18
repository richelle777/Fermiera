import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paiement1PageRoutingModule } from './paiement1-routing.module';

import { Paiement1Page } from './paiement1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paiement1PageRoutingModule
  ],
  declarations: [Paiement1Page]
})
export class Paiement1PageModule {}
