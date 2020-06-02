import {TestBed} from '@angular/core/testing';

import {Rental

.
TaskService
}
from
'./rental.task.service';

describe('Rental.TaskService', () => {
  let service: Rental.TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rental.TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
