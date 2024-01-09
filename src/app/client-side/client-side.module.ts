import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ClientSideComponent,
    SidenavComponent,
    BodyComponent,
    AccountOverviewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule
  ],
  exports: [
    SidenavComponent,
    BodyComponent,
    AccountOverviewComponent
  ]}
)
export class ClientSideModule { }
