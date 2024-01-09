import { Component } from '@angular/core';
import { navBarData } from './nav-data';
import { CollapseService } from '../service/collapse.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  
  constructor(public collapsedService: CollapseService) {}

  navData = navBarData;
  collapse: boolean = false;


  ngOnInit(){
    this.collapsedService.collapse$.subscribe( res => {
      this.collapse = res;
    })
  }

  toggleCollapse(): void {
    this.collapsedService.toggleCollapse(!this.collapse)
  }

}
