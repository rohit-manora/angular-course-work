import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCountDownComponent } from './subject-count-down.component';

const routes: Routes = [
  {path:'', component:SubjectCountDownComponent, pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectCountDownRoutingModule { }
