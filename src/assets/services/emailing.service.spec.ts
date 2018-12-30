/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailingService } from './emailing.service';

describe('Service: Emailing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailingService]
    });
  });

  it('should ...', inject([EmailingService], (service: EmailingService) => {
    expect(service).toBeTruthy();
  }));
});
