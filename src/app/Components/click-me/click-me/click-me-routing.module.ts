import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickMeComponent } from './click-me.component';

const routes: Routes = [ {path:'',component:ClickMeComponent, pathMatch:'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickMeRoutingModule { }
