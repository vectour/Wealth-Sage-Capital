import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';

// const routes: Routes = [{ path: '', component: ClientSideComponent},
//   {path: 'sidenav', component: SidenavComponent},
//   {path: 'account-overview', component: AccountOverviewComponent}
// ];

const routes: Routes = [{ path: '', component: ClientSideComponent, children: [
  {path: '', redirectTo: '/client/account-overview', pathMatch: 'full'},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'account-overview', component: AccountOverviewComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
