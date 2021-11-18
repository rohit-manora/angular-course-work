import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCountDownComponent } from './subject-count-down.component';

describe('SubjectCountDownComponent', () => {
  let component: SubjectCountDownComponent;
  let fixture: ComponentFixture<SubjectCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
