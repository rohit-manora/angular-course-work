import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {

  @Input() timerLimit: any = 10;
  @Input() startOrPauseClickEvent: boolean = false;
  @Input() resetClickEvent: boolean = false;
  public timer: any;
  public timerRunning: any = null;
  public remainingSeconds: number = 0;
 
  constructor() { }

  ngOnInit() {
    this.remainingSeconds = 0;
  }
  ngOnChanges(changes: any) {
    if (changes['resetClickEvent']) {
      this.remainingSeconds = this.timerLimit;
      this.timerRunning = false;
      clearInterval(this.timer);
    }
    if (changes['startOrPauseClickEvent']) {
      this.onStartOrPauseEvent()
    }
    if (changes['timerLimit']) {
      this.remainingSeconds = this.timerLimit;
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.remainingSeconds = this.remainingSeconds > 0 ? this.remainingSeconds - 1 : this.remainingSeconds;
      if (this.remainingSeconds < 1) clearInterval(this.timer);
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.timerRunning = false;
  }

  onStartOrPauseEvent() {
    if (!this.timerRunning && this.timerLimit !== undefined) {
      this.startTimer();
      this.timerRunning = true;
    }
    else {
      this.pauseTimer();
    }
  }
}

