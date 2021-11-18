import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  public startOrPauseClickEvent: boolean = false;
  public resetClickEvent: boolean = false;
  public timerLimit: any;
  public startCount = 0;
  public pauseCount = 0;
  public isStart: Boolean = false;

  constructor() {}

  ngOnInit() {}
  onStartOrPauseClick(event:any) {
    this.startOrPauseClickEvent = event;
    this.isStart = !this.isStart;
    this.isStart? this.startCount++ : this.pauseCount++;
  }
  onResetClick(event:any) {
    this.resetClickEvent = event;
  }
  onTimerLimit(limit:any){
    this.timerLimit =limit;
  }

  
}
