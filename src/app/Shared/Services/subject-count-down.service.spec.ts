import { TestBed } from '@angular/core/testing';

import { SubjectCountDownService } from './subject-count-down.service';

describe('SubjectCountDownService', () => {
  let service: SubjectCountDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectCountDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
