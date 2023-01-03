import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tab/home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'tab/basket',
    loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'tab/setting',
    loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
  },  {
    path: 'details-fruits',
    loadChildren: () => import('./views/details-fruits/details-fruits.module').then( m => m.DetailsFruitsPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./views/panier/panier.module').then( m => m.PanierPageModule)
  },

<<<<<<< HEAD
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 5602da8febe1696e5d4aa566aca1d4e47df41f92
