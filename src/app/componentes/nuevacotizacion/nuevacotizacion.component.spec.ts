import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacotizacionComponent } from './nuevacotizacion.component';

describe('NuevacotizacionComponent', () => {
  let component: NuevacotizacionComponent;
  let fixture: ComponentFixture<NuevacotizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevacotizacionComponent]
    });
    fixture = TestBed.createComponent(NuevacotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
