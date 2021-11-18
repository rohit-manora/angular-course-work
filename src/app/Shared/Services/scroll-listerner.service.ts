import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollListernerService {

  public clickMeArray = [];
  public clickMeArrayList$: BehaviorSubject<any[]>;
  constructor() { 
    this.clickMeArray.length = 50;
    this.clickMeArrayList$ = new BehaviorSubject<any[]>([]);
    this.clickMeArrayList$.next(this.clickMeArray);
  }

  loadMore() {
    this.addMoreItems();
    this.clickMeArrayList$.next(this.clickMeArray);
  }

  addMoreItems() {
    this.clickMeArray.length +=5; 
  }
}
