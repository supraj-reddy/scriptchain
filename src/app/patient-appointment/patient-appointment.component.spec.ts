import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentComponent } from './patient-appointment.component';

describe('PatientAppointmentComponent', () => {
  let component: PatientAppointmentComponent;
  let fixture: ComponentFixture<PatientAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientAppointmentComponent]
    });
    fixture = TestBed.createComponent(PatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});