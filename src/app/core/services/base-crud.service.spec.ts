import { TestBed } from '@angular/core/testing';

import { BaseCrudService } from './base-crud.service';
import { BaseEntity } from '../interfaces/base-entity';

describe('BaseCrudService', () => {
  let service: BaseCrudService<BaseEntity>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
