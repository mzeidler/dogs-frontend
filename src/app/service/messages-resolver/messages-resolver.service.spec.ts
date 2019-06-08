import { TestBed } from '@angular/core/testing';

import { MessagesResolverService } from './messages-resolver.service';

describe('MessagesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesResolverService = TestBed.get(MessagesResolverService);
    expect(service).toBeTruthy();
  });
});
