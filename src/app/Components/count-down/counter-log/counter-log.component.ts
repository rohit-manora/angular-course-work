import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.scss']
})
export class CounterLogComponent implements OnInit {

  @Input() startOrPauseClickEvent: boolean = false;
  @Input() resetClickEvent: boolean = false;
  public logsArray: Array<{ 'event': string, 'dateTime': any }> = [];
  public resetClicked: boolean = false;
  constructor() { }

  public dateTime = new Date()
  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes['resetClickEvent']) {
      if (this.logsArray.length) {
        this.resetClicked = true;
      }
      this.logsArray.length = 0
    }
    if (changes['startOrPauseClickEvent']) {
      this.logsArray.push({ 'event': changes['startOrPauseClickEvent']['currentValue'] === true ? 'Started at ' : 'Paused at ', 'dateTime': new Date() })
    }
  }

}
