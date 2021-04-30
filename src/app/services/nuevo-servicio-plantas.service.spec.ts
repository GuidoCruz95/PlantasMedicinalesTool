import { TestBed } from '@angular/core/testing';

import { NuevoServicioPlantasService } from './nuevo-servicio-plantas.service';

describe('NuevoServicioPlantasService', () => {
  let service: NuevoServicioPlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoServicioPlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
