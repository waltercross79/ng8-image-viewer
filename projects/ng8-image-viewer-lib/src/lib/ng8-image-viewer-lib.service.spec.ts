import { TestBed } from '@angular/core/testing';

import { Ng8ImageViewerLibService } from './ng8-image-viewer-lib.service';

describe('Ng8ImageViewerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng8ImageViewerLibService = TestBed.get(Ng8ImageViewerLibService);
    expect(service).toBeTruthy();
  });
});
