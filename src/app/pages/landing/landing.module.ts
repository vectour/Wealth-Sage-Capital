import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class LandingModule { }
