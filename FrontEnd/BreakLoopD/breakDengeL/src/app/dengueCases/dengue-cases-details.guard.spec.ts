import { TestBed } from '@angular/core/testing';

import { DengueCasesDetailsGuard } from './dengue-cases-details.guard';

describe('DengueCasesDetailsGuard', () => {
  let guard: DengueCasesDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DengueCasesDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
