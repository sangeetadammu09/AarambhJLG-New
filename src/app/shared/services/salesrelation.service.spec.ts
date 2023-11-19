import { TestBed } from '@angular/core/testing';

import { SalesrelationService } from './salesrelation.service';

describe('SalesrelationService', () => {
  let service: SalesrelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesrelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
