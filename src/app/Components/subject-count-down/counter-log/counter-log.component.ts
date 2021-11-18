import { Component, OnInit } from '@angular/core';
import { SubjectCountDownService } from 'src/app/Shared/Services/subject-count-down.service';

@Component({
  selector: 'app-counter-logs',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.scss']
})
export class CounterLogComponent implements OnInit {

  public logs:any = [];
  constructor(private subjectCountDownService: SubjectCountDownService) { }

  ngOnInit(): void {
    this.subjectCountDownService.countDownTimer$.subscribe(event=>{
      this.logs = event;
    });
  }

}
