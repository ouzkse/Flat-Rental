import { TestBed } from '@angular/core/testing';

import { LocationsTaskService } from './locations.task.service';

describe('TaskService', () => {
  let service: LocationsTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
