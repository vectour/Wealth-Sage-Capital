import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{ path: '', component: LandingComponent, children: [
  { path: '', redirectTo: '/landing/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
