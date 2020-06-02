import {TestBed} from '@angular/core/testing';

import {Image

.
DataService
}
from
'./image.data.service';

describe('Image.DataService', () => {
  let service: Image.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Image.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
