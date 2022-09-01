import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'products',
    children: [
      {
      path : '',
      loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
      },

      {
        path : ':pId',
        loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
      }
    ]
    
  },

  {
    path: 'categories',
    children: [
      {
      path : '',
      loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
      },

      {
        path : ':catId',
        loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
      }
    ]
  },

  {
    path: 'tags',
    children: [
      {
      path : '',
      loadChildren: () => import('./pages/tags/tags.module').then( m => m.TagsPageModule)
      },

      {
        path : ':tagId',
        loadChildren: () => import('./pages/tag/tag.module').then( m => m.TagPageModule)
      }
    ]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'ordersuccess',
    loadChildren: () => import('./pages/ordersuccess/ordersuccess.module').then( m => m.OrdersuccessPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'customerprofile',
    loadChildren: () => import('./pages/customerprofile/customerprofile.module').then( m => m.CustomerprofilePageModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
