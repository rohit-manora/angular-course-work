import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFunctionCountComponent } from './counter-function-count.component';

describe('CounterFunctionCountComponent', () => {
  let component: CounterFunctionCountComponent;
  let fixture: ComponentFixture<CounterFunctionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterFunctionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFunctionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
