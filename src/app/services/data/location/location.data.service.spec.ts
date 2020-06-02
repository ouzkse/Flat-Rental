import {TestBed} from '@angular/core/testing';

import {Location

.
DataService
}
from
'./location.data.service';

describe('Location.DataService', () => {
  let service: Location.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Location.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
