import { Component } from '@angular/core';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main> 
      <header class="doctors-page">
        <h1>Hello Dr. Noori</h1>
      </header>
      <section class="content">
        <app-patient-appointment></app-patient-appointment>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
  imports: [PatientAppointmentComponent],
})
export class AppComponent {
  title = 'homes';
}
