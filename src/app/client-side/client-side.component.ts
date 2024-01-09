import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.css']
})
export class ClientSideComponent {
  title = 'sidenav'

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }




}
