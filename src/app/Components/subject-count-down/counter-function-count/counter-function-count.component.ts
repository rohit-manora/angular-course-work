import { Component, OnInit } from '@angular/core';
import { CountDown } from 'src/app/Models/count-down.model';
import { SubjectCountDownService } from 'src/app/Shared/Services/subject-count-down.service';

@Component({
  selector: 'app-counter-function-count',
  templateUrl: './counter-function-count.component.html',
  styleUrls: ['./counter-function-count.component.scss']
})
export class CounterFunctionCountComponent implements OnInit {

  public numberOfStarts: number = 0;
  public numberOfPauses: number = 0;
  constructor(private subjectCountDownService: SubjectCountDownService) { }

  ngOnInit(): void {
    this.subjectCountDownService.getTimerLogs().subscribe(value=>{
      console.log(value)
      this.numberOfStarts = value.filter((value:CountDown) => value.eventLog === 'Started At ').length;
      this.numberOfPauses = value.filter((value:CountDown) => value.eventLog === 'Paused At ').length;

    })
  }

}
