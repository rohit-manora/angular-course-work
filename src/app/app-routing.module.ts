import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { productListResolver } from './Shared/Services/product-list-resolver';

const routes: Routes = [
  {path:'', component:DashboardComponent, pathMatch:'full'},
  {path:'floating-banner', loadChildren: () => import('./Components/floating-banner/floating-banner.module').then(module => module.FloatingBannerModule)},
  {path:'counter', loadChildren:()=>import('./Components/count-down/count-down.module').then(module=>module.CountDownModule)},
  {path:'subject-counter', loadChildren:()=>import('./Components/subject-count-down/subject-count-down.module').then(module=>module.SubjectCountDownModule)},
  {path:'click-me', loadChildren:()=>import('./Components/click-me/click-me/click-me-routing.module').then(module=>module.ClickMeRoutingModule)},
  {path:'student-mark', loadChildren:()=>import('./Components/student-mark/student-mark-routing.module').then(module=>module.StudentMarkRoutingModule)},
  {path:'products', loadChildren:()=>import('./Components/products/products.module').then(module=>module.ProductsModule),
  resolve: { products: productListResolver }  }


  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
