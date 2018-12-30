/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavegationService } from './navegation.service';

describe('Service: Navegation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavegationService]
    });
  });

  it('should ...', inject([NavegationService], (service: NavegationService) => {
    expect(service).toBeTruthy();
  }));
});
