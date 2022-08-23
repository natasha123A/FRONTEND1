import { TestBed } from '@angular/core/testing';

import { MarksheetManagementService } from './marksheet-management.service';

describe('MarksheetManagementService', () => {
  let service: MarksheetManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksheetManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
