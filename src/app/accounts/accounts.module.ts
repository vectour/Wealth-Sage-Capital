import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AccountsComponent,
    SidebarComponent,
    HeaderComponent
  ],

  imports: [
    CommonModule,
    AccountsRoutingModule,
    FontAwesomeModule
  ]
})
export class AccountsModule { }
