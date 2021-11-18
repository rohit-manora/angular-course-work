import { Component, OnInit } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ScrollListernerService } from 'src/app/Shared/Services/scroll-listerner.service';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit {

  public List$: Observable<number[]> = of([]);
  constructor(private scrollListernerService: ScrollListernerService) { }

  ngOnInit(): void {
  this.List$ = this.scrollListernerService.clickMeArrayList$;
  }

  scrolledAtBottom() {
    console.log('scrolled');
    this.scrollListernerService.loadMore();
  }

  onButtonClick(i:any) {
    alert(`Button clicked ${i}`);
  }

}
