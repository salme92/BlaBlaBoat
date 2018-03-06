import { TestBed, inject } from '@angular/core/testing';

import { MakeTripService } from './make-trip.service';

describe('MakeTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeTripService]
    });
  });

  it('should be created', inject([MakeTripService], (service: MakeTripService) => {
    expect(service).toBeTruthy();
  }));
});
