import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeArticlesPage } from './liste-articles.page';

const routes: Routes = [
  {
    path: '',
    component: ListeArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeArticlesPageRoutingModule {}
