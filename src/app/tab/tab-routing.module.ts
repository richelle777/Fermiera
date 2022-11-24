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
      }
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      
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
