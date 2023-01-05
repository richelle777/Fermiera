import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../views/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('../views/basket/basket.module').then( m => m.BasketPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../views/setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: 'liste-articles',
        loadChildren: () => import('../views/liste-articles/liste-articles.module').then( m => m.ListeArticlesPageModule)
      },
      {
        path: 'all-orders',
        loadChildren: () => import('../views/all-orders/all-orders.module').then( m => m.AllOrdersPageModule)
      },
      {
        path: 'follow-order',
        loadChildren: () => import('../views/follow-order/follow-order.module').then( m => m.FollowOrderPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
