import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickMeRoutingModule } from './click-me-routing.module';
import { ClickMeComponent } from './click-me.component';
import { ScrollListernerDirective } from 'src/app/Shared/Directives/scroll-listerner.directive';


@NgModule({
  declarations: [ClickMeComponent, ScrollListernerDirective],
  imports: [
    CommonModule,
    ClickMeRoutingModule
  ]
})
export class ClickMeModule { }
