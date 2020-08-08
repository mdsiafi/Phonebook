import { TestBed } from '@angular/core/testing';

import { ContactjsonService } from './contactjson.service';

describe('ContactjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactjsonService = TestBed.get(ContactjsonService);
    expect(service).toBeTruthy();
  });
});
