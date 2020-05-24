import { TestBed } from '@angular/core/testing';

import { RegisterTaskService } from './register.task.service';

describe('TaskService', () => {
  let service: RegisterTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
