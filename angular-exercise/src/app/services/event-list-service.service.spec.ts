import { TestBed, inject } from '@angular/core/testing';

import { EventListServiceService } from './event-list-service.service';

describe('EventListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListServiceService]
    });
  });

  it('should be created', inject([EventListServiceService], (service: EventListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
