import { TestBed } from '@angular/core/testing';

import { LoginTaskService } from './login.task.service';

describe('LoginService', () => {
  let service: LoginTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
