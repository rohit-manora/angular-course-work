import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectCountDownRoutingModule } from './subject-count-down-routing.module';
import { SubjectCountDownComponent } from './subject-count-down.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { CounterFunctionCountComponent } from './counter-function-count/counter-function-count.component';
import { FormsModule } from '@angular/forms';
import { CounterDisplayComponent } from './counter-display/counter-display.component';


@NgModule({
  declarations: [
    SubjectCountDownComponent,
    CounterInputComponent,
    CounterLogComponent,
    CounterFunctionCountComponent,
    CounterDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubjectCountDownRoutingModule
  ]
})
export class SubjectCountDownModule { }
