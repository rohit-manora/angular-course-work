import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOperationCountComponent } from './counter-operation-count.component';

describe('CounterOperationCountComponent', () => {
  let component: CounterOperationCountComponent;
  let fixture: ComponentFixture<CounterOperationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOperationCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOperationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
