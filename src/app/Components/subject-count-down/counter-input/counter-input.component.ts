import { Component, OnInit } from '@angular/core';
import { SubjectCountDownService } from 'src/app/Shared/Services/subject-count-down.service';

@Component({
  selector: 'app-counter-inputs',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  constructor(private subjectCountDownService: SubjectCountDownService) { }
  public model: { timerLimit: number; } = {
    'timerLimit': 0
  };
  public pausedAtArray: number[] = [];
  public startOrPauseClickEvent: Boolean = false;

  onStartOrPause(){
    this.startOrPauseClickEvent = !this.startOrPauseClickEvent;
    this.subjectCountDownService.onStartOrPauseButtonClick({'eventLog': this.startOrPauseClickEvent ? 'Started At ' : 'Paused At ', 'dateTime': new Date(), 'timerLimit': this.model.timerLimit, 'isResetClick':false});
  }

  ontimerLimitChange(){
    this.subjectCountDownService.onTimerLimitChange(this.model.timerLimit);
  }

  onReset(){
    this.startOrPauseClickEvent = false;
    this.subjectCountDownService.onStartOrPauseButtonClick({'eventLog':this.startOrPauseClickEvent ? 'Started At ' : 'Paused At ', 'dateTime': new Date(), 'timerLimit': this.model.timerLimit, 'isResetClick':true});
  }

  ngOnInit() {
   this.subjectCountDownService.pausedAt$.subscribe(value=>{
    this.pausedAtArray = value;
  });
  }

}
