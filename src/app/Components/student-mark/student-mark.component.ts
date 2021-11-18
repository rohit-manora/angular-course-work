import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  section: string,
  name: string;
  class: number;
  sub1: number;
  sub2: number;
  sub3: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {section:'A', name: 'Saloni', class: 1, sub1: 40, sub2: 46, sub3: 87},
  {section: 'B', name: 'Shah', class: 3, sub1: 67, sub2: 60, sub3: 78},
  {section: 'B', name: 'Arjun', class: 7, sub1: 29,sub2: 78, sub3: 46},
  {section: 'B', name: 'Bhim', class: 2, sub1: 77,sub2: 79, sub3: 47},
  {section: 'C', name: 'ALi', class: 2, sub1: 66,sub2: 40, sub3: 77},
  {section: 'C', name: 'Carbon', class: 1, sub1: 54,sub2: 58, sub3: 87},
  {section: 'A', name: 'greay', class: 7, sub1: 52,sub2:63, sub3: 93},
  {section: 'B', name: 'sames', class: 1, sub1: 87,sub2: 40, sub3: 65},
  {section: 'A', name: 'sivyan', class: 3, sub1: 90,sub2: 68, sub3: 61},
  {section: 'C', name: 'neon', class: 3, sub1: 78,sub2: 57, sub3: 59},
  {section:'C', name: 'Keish', class: 2, sub1: 42, sub2: 44, sub3: 77},
  {section: 'B', name: 'suman', class: 4, sub1: 67, sub2: 60, sub3: 78},
  {section: 'C', name: 'subhash', class: 5, sub1: 29,sub2: 78, sub3: 46},
  {section: 'B', name: 'Bhola', class: 6, sub1: 77,sub2: 79, sub3: 47},
  {section: 'A', name: 'Aliya', class: 6, sub1: 66,sub2: 40, sub3: 77},
  {section: 'A', name: 'Carot', class: 4, sub1: 54,sub2: 58, sub3: 87},
  {section: 'A', name: 'gimmy', class: 4, sub1: 52,sub2:63, sub3: 93},
  {section: 'B', name: 'sameer', class: 3, sub1: 87,sub2: 40, sub3: 65},
  {section: 'B', name: 'sima', class: 3, sub1: 60,sub2: 67, sub3: 68},
  {section: 'B', name: 'nepolis', class: 2, sub1: 78,sub2: 67, sub3: 79},
];
@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.scss']
})
export class StudentMarkComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'class', 'section', 'sub1', 'sub2', 'sub3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort | any;


  constructor(private _liveAnnouncer: LiveAnnouncer) {}


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
}
}
