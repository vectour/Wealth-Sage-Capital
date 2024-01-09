import { Component } from '@angular/core';
import { CollapseService } from '../service/collapse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public collapseService: CollapseService) {}

  collapse:boolean = false;

  ngOnInit(){
    this.collapseService.collapse$.subscribe( res => {
      this.collapse = res;
    })
  }

  toggle():void {
    this.collapseService.toggleCollapse(!this.collapse)
  }

}
