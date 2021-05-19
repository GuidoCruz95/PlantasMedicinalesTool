import { TestBed } from '@angular/core/testing';

import { InsertPlantaService } from './insert-planta.service';

describe('InsertPlantaService', () => {
  let service: InsertPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
