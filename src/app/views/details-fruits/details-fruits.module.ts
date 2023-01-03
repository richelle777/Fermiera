import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsFruitsPageRoutingModule } from './details-fruits-routing.module';

import { DetailsFruitsPage } from './details-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsFruitsPageRoutingModule
  ],
  declarations: [DetailsFruitsPage]
})
export class DetailsFruitsPageModule {}
