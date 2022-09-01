import { TestBed } from '@angular/core/testing';

import { CommondataService } from './commondata.service';

describe('CommondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommondataService = TestBed.get(CommondataService);
    expect(service).toBeTruthy();
  });
});
