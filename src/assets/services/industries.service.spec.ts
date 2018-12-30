/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndustriesService } from './industries.service';

describe('Service: Industries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustriesService]
    });
  });

  it('should ...', inject([IndustriesService], (service: IndustriesService) => {
    expect(service).toBeTruthy();
  }));
});
