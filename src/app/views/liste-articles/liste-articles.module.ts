import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeArticlesPageRoutingModule } from './liste-articles-routing.module';

import { ListeArticlesPage } from './liste-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeArticlesPageRoutingModule
  ],
  declarations: [ListeArticlesPage]
})
export class ListeArticlesPageModule {}
