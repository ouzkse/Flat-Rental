import {TestBed} from '@angular/core/testing';

import {MainNavigationService} from './main.navigation.service';

describe('NavigationserviceService', () => {
  let service: MainNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
