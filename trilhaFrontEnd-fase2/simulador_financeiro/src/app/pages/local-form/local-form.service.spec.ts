import { TestBed } from '@angular/core/testing';

import { LocalFormService } from './local-form.service';

describe('LocalFormService', () => {
  let service: LocalFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
