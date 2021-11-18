import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarkComponent } from './student-mark.component';

const routes: Routes = [{path:'', component:StudentMarkComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentMarkRoutingModule { }
