import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {

  constructor() {}

  collapse =  new BehaviorSubject<boolean>(false)
  collapse$ = this.collapse.asObservable();


  toggleCollapse(value:boolean): void {
    this.collapse.next(value)
  }

}
