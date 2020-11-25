import { TestBed } from '@angular/core/testing';

import { ArquetiposService } from './arquetipos.service';

describe('ArquetiposService', () => {
  let service: ArquetiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquetiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
