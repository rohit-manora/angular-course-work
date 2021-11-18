import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarkRoutingModule } from './student-mark-routing.module';
import { StudentMarkComponent } from './student-mark.component';
import { SharedModule } from 'src/app/Shared/Modules/shared/shared.module';



@NgModule({
  declarations: [
    StudentMarkComponent
  ],
  imports: [
    CommonModule,
    StudentMarkRoutingModule,
    SharedModule
  ],
  exports:[SharedModule]
})
export class StudentMarkModule { }
