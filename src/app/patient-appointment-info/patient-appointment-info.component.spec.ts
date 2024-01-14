import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentInfoComponent } from './patient-appointment-info.component';

describe('PatientAppointmentInfoComponent', () => {
  let component: PatientAppointmentInfoComponent;
  let fixture: ComponentFixture<PatientAppointmentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientAppointmentInfoComponent]
    });
    fixture = TestBed.createComponent(PatientAppointmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
