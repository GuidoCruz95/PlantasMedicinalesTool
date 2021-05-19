import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPlantasComponent } from './insertar-plantas.component';

describe('InsertarPlantasComponent', () => {
  let component: InsertarPlantasComponent;
  let fixture: ComponentFixture<InsertarPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
