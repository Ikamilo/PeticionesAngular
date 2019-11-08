import { TestBed } from '@angular/core/testing';

import { SerchRequestService } from './serch-request.service';

describe('SerchRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerchRequestService = TestBed.get(SerchRequestService);
    expect(service).toBeTruthy();
  });
});
