import { TestBed } from '@angular/core/testing';

import { ProjectViewService } from './project-view.service';

describe('ProjectViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectViewService = TestBed.get(ProjectViewService);
    expect(service).toBeTruthy();
  });
});
