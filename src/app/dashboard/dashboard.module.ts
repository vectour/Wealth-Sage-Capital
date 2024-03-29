import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account/account.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { TradingOverviewComponent } from './trading-overview/trading-overview.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    SidenavComponent,
    HeaderComponent,
    BodyComponent,
    AccountOverviewComponent,
    TradingOverviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    HeaderComponent,
    AccountComponent,
    BodyComponent,
    AccountOverviewComponent,
    TradingOverviewComponent
  ]
})
export class DashboardModule { }
