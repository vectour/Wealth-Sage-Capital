import { Component } from '@angular/core';
import { CollapseService } from './service/collapse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public collapsedService: CollapseService) {}

  collapsed:boolean = false


  ngOnInit(){
    this.collapsedService.collapse$.subscribe( res => {
      this.collapsed = res;
    })
  }

}
