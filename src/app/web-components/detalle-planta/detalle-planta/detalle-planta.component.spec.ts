import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlantaComponent } from './detalle-planta.component';

describe('DetallePlantaComponent', () => {
  let component: DetallePlantaComponent;
  let fixture: ComponentFixture<DetallePlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
