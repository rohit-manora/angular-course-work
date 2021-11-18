import { Component, OnInit } from '@angular/core';
import { CountDown } from 'src/app/Models/count-down.model';
import { SubjectCountDownService } from 'src/app/Shared/Services/subject-count-down.service';

@Component({
  selector: 'app-counter-displays',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {

  public remainingSeconds = 0;
  public isTimerRunning = false;
  public timer: any;

   
  constructor(private subjectCountDownService: SubjectCountDownService) { }

  ngOnInit(): void {

    this.subjectCountDownService.countDownTimer$.subscribe(event=>{
      const data = event[event.length-1];
      if(data.isResetClick) {
        this.resetTimer(data.timerLimit)
      } else if(data.timerLimit){
        this.startPauseTimer(data);
      }
    });
    this.subjectCountDownService.timerLimit$.subscribe(value=>{
      this.remainingSeconds = value;
    })
  }

  startPauseTimer(data: CountDown) {
    if(this.isTimerRunning) {
      this.pauseTimer();
      this.subjectCountDownService.pausedAtArray(this.remainingSeconds);
    } else{
      this.startTimer();
    }
  }

  startTimer() {
    this.isTimerRunning = true;
    this.timer = setInterval(()=>{
     this.remainingSeconds = this.remainingSeconds>0?this.remainingSeconds-1: this.remainingSeconds;
     if(this.remainingSeconds<1) clearInterval(this.timer);
    }, 1000)
  }

  pauseTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timer);
  }

  resetTimer(time: number) {
    this.pauseTimer();
    this.subjectCountDownService.pausedAtArray(-1);
    this.remainingSeconds = time;
  }
}
