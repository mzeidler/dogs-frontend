import { TestBed } from '@angular/core/testing';

import { DogsResolverService } from './dogs-resolver.service';

describe('DogsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogsResolverService = TestBed.get(DogsResolverService);
    expect(service).toBeTruthy();
  });
});
