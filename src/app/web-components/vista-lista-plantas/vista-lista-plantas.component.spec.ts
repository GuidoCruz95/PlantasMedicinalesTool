import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VistaListaPlantasComponent } from './vista-lista-plantas.component';

describe('VistaListaPlantasComponent', () => {
  let component: VistaListaPlantasComponent;
  let fixture: ComponentFixture<VistaListaPlantasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListaPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
