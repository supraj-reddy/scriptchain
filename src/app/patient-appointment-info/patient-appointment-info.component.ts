import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientInfo } from '../patient-info';

@Component({
  selector: 'app-patient-appointment-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="patient">
      <img class="patient-photo" [src]="patientInfo.photo">
      <h2 class="patient-name">{{ patientInfo.name }} </h2>
      <h3 class="patient-nextapp"><strong>Next Appointment</strong> {{ patientInfo.nextAppointment }} </h3>
      <section class="patient-info">
        <p class="data"><strong>DOB</strong>  {{ patientInfo.dob }} </p> 
        <p class="data"><strong>Sex</strong>   {{ patientInfo.sex }} </p> 
        <p class="data"><strong>Residence</strong>  {{ patientInfo.residence }} </p> 
        <p class="data"><strong>MRN</strong>  {{ patientInfo.mrn }} </p> 
        <p class="data"><strong>ID Number</strong>   {{ patientInfo.id }} </p> 
        <p class="data"><strong>Last 4 Digits of SSN</strong>   {{ patientInfo.ssn }} </p> 
        <p class="data"><strong>Phone Number</strong>  {{ patientInfo.phone }} </p> 
        <p class="data"><strong>Email Address</strong>   {{ patientInfo.email }} </p> 
        <p class="data"><strong>Hospital</strong>  {{ patientInfo.hospital }} </p> 
        <p class="data"><strong>Dept.</strong>  {{ patientInfo.dept }} </p> 
        <p class="data"><strong>Physician</strong>  {{ patientInfo.physician }} </p> 
        <p class="data"><strong>Conditions</strong>  {{ patientInfo.conditions }} </p>
      </section>
    </div> 
  `,
  styleUrls: ['./patient-appointment-info.component.css']
})
export class PatientAppointmentInfoComponent {
  @Input() patientInfo!:PatientInfo;
}
