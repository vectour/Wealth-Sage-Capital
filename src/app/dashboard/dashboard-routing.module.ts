import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account/account.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { TradingOverviewComponent } from './trading-overview/trading-overview.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children: [
  {path: '', redirectTo: '/dashboard/account', pathMatch: 'full'},
  {path: 'account', component: AccountComponent},
  {path: 'account-overview', component: AccountOverviewComponent},
  {path: 'trading-overview', component: TradingOverviewComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
