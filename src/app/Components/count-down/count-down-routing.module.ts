import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownComponent } from './count-down.component';

const routes: Routes = [
  {path:'', component:CountDownComponent, pathMatch:'full'} 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownRoutingModule { }
