import { TestBed } from '@angular/core/testing';

import { TranemService } from './tranem.service';

describe('TranemService', () => {
  let service: TranemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
