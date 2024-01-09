import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Landing/home', pathMatch: 'full'},
  { path: 'Landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'client', loadChildren: () => import('./client-side/client-side.module').then(m => m.ClientSideModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
