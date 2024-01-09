import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  activeLink: number = 1;

  setLink(linkNumber: number) {
    this.activeLink = linkNumber;
    console.log(this.activeLink)
  }

}
