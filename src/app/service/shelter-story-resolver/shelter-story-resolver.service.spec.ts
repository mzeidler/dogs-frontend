import { TestBed } from '@angular/core/testing';

import { ShelterStoryResolverService } from './shelter-story-resolver.service';

describe('ShelterStoryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShelterStoryResolverService = TestBed.get(ShelterStoryResolverService);
    expect(service).toBeTruthy();
  });
});
