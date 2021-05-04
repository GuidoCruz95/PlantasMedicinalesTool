import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPlantaComponent } from './insertar-planta.component';

describe('InsertarPlantaComponent', () => {
  let component: InsertarPlantaComponent;
  let fixture: ComponentFixture<InsertarPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
