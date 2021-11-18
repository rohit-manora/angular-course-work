import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './Components/floating-banner/floating-banner.component';
import { ClickMeComponent } from './Components/click-me/click-me/click-me.component';
import { ScrollListernerDirective } from './Shared/Directives/scroll-listerner.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Shared/Modules/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentMarkModule } from './Components/student-mark/student-mark.module';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ClickMeComponent,
    ScrollListernerDirective,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StudentMarkModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
