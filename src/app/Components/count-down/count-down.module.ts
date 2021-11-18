import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownRoutingModule } from './count-down-routing.module';
import { CountDownComponent } from './count-down.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterOperationCountComponent } from './counter-operation-count/counter-operation-count.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountDownComponent,
    CounterInputComponent,
    CounterLogComponent,
    CounterDisplayComponent,
    CounterOperationCountComponent
  ],
  imports: [
    CommonModule,
    CountDownRoutingModule,
    FormsModule
  ]
})
export class CountDownModule { }
