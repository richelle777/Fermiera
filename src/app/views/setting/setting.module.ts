import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SettingPageRoutingModule,
    TranslateModule
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
