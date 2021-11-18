import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountDown } from 'src/app/Models/count-down.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectCountDownService {

  public countDownTimer$: BehaviorSubject<CountDown[]>;
  public timerLimit$: BehaviorSubject<number>;
  public pausedAt$: BehaviorSubject<number[]>;
  public eventLogs: Array<CountDown[]> = [];
  constructor() {
    this.countDownTimer$ = new BehaviorSubject<CountDown[]>([{ 'eventLog': null, 'dateTime': new Date(), 'timerLimit': 0, 'isResetClick': false }])
    this.timerLimit$ = new BehaviorSubject<number>(0);
    this.pausedAt$ = new BehaviorSubject<number[]>([]);
  }

  onStartOrPauseButtonClick(event: any) {
    if (event.isResetClick) this.countDownTimer$.next([{ 'eventLog': null, 'dateTime': new Date(), 'timerLimit': event.timerLimit, 'isResetClick': event.isResetClick }])
    else {
      this.eventLogs.push(event);
      this.countDownTimer$.next([...this.countDownTimer$.value, event]);
    }
  }

  onTimerLimitChange(event: number) {
    this.timerLimit$.next(event)
  }

  getTimerLogs(): Observable<any> {
    return this.countDownTimer$.pipe(
      map(items => items.filter(event => event.eventLog !== null))
    )
  }

  pausedAtArray(time: number) {
    if (time) {
      this.pausedAt$.next([...this.pausedAt$.value, time]);
    } else {
      this.pausedAt$.next([]);
    }
  }
}
