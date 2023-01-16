import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
  
//   {
//     path: '',
//     redirectTo: 'tab',
//     pathMatch: 'full'
//   },
//   {
//     path: 'register',
//     loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: 'tab/home',
//     loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: 'tab',
//     loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
//   },
//   {
//     path: 'basket',
//     loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketPageModule)
//   },
//   {
//     path: 'tab/basket',
//     loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketPageModule)
//   },
//   {
//     path: 'setting',
//     loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
//   },
//   {
//     path: 'tab/setting',
//     loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
//   },
//   {
//     path: 'details-fruits',
//     loadChildren: () => import('./views/details-fruits/details-fruits.module').then( m => m.DetailsFruitsPageModule)
//   },
//   {
//     path: 'panier',
//     loadChildren: () => import('./views/panier/panier.module').then( m => m.PanierPageModule)
//   },

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
    path: 'panier',
    loadChildren: () => import('./views/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'details-fruits',
    loadChildren: () => import('./views/details-fruits/details-fruits.module').then( m => m.DetailsFruitsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'liste-articles',
    loadChildren: () => import('./views/liste-articles/liste-articles.module').then( m => m.ListeArticlesPageModule)
  },
  {
    path: 'all-orders',
    loadChildren: () => import('./views/all-orders/all-orders.module').then( m => m.AllOrdersPageModule)
  },
  
  {
    path: 'follow-order',
    loadChildren: () => import('./views/follow-order/follow-order.module').then( m => m.FollowOrderPageModule)
  },

  {
    path: 'addresses',
    loadChildren: () => import('./views/addresses/addresses.module').then( m => m.AddressesPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./views/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
