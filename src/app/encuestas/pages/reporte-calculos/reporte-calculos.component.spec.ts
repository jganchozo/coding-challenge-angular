import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCalculosComponent } from './reporte-calculos.component';

describe('ReporteCalculosComponent', () => {
  let component: ReporteCalculosComponent;
  let fixture: ComponentFixture<ReporteCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteCalculosComponent]
    });
    fixture = TestBed.createComponent(ReporteCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
