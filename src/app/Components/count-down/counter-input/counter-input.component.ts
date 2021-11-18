import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  @Output() onStartOrPauseClick = new EventEmitter<Boolean>();
  @Output() onResetClick = new EventEmitter<Boolean>();
  @Output() timerLimit = new EventEmitter<Number>();
  constructor() { }
  public model: { timerLimit: number; } = {
    'timerLimit': 0
  };
  public startOrPauseClickEvent: Boolean = false;
  public resetClickEvent: Boolean = false;
 
 
  onStartOrPause(){
    this.timerLimit.emit(this.model.timerLimit)
    this.startOrPauseClickEvent = !this.startOrPauseClickEvent;
    this.onStartOrPauseClick.emit(this.startOrPauseClickEvent)
  }
  onReset(){
    //pause the timer on reset click
    this.startOrPauseClickEvent = false;
    this.onStartOrPauseClick.emit(this.startOrPauseClickEvent)
    this.timerLimit.emit(this.model.timerLimit)
    this.resetClickEvent = !this.resetClickEvent;
    this.onResetClick.emit(this.resetClickEvent)
  }
  ngOnInit(): void {
  }

}
