import { TestBed } from '@angular/core/testing';

import { CommitDetailsService } from './commit-details.service';

describe('CommitDetailsService', () => {
  let service: CommitDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
