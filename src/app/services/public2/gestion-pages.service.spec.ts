import { TestBed } from '@angular/core/testing';

import { GestionPagesService } from './gestion-pages.service';

describe('GestionPagesService', () => {
  let service: GestionPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
