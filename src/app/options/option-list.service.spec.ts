import { TestBed, inject } from '@angular/core/testing';

import { OptionListService } from './option-list.service';

describe('OptionListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionListService]
    });
  });

  it('should be created', inject([OptionListService], (service: OptionListService) => {
    expect(service).toBeTruthy();
  }));
});
