import { TestBed } from '@angular/core/testing';

import { MioService } from './mio.service';

describe('MioService', () => {
  let service: MioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
