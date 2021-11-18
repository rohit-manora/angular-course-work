import { TestBed } from '@angular/core/testing';

import { ScrollListernerService } from './scroll-listerner.service';

describe('ScrollListernerService', () => {
  let service: ScrollListernerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollListernerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
