import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAppointmentInfoComponent } from '../patient-appointment-info/patient-appointment-info.component';
import { PatientInfo } from '../patient-info';

@Component({
  selector: 'app-patient-appointment',
  standalone: true,
  imports: [CommonModule, PatientAppointmentInfoComponent],
  template: `
    <section>
      <form>
        <label for="patient-info">Patient Info</label>
        <section class="patient-info">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" placeholder="First Name">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" placeholder="Last Name">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" placeholder="MM/DD/YYYY"><br><br>
        </section>
        <br>
        <label for="app-range">Appointment Range</label>
        <section class="app-range">
        <label for="start-date">Start Date</label>
        <input type="date" id="start-date" placeholder="MM/DD/YYYY">
        <label for="end-date">End Date</label>
        <input type="date" id="end-date" placeholder="MM/DD/YYYY">
        </section>
        <button class="primary" type="button">Submit</button>
      </form>
    </section>

    <section class="results">
      <app-patient-appointment-info *ngFor="let patientInfo of patientInfoList" [patientInfo] = "patientInfo" ></app-patient-appointment-info>
    </section>
  `,
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {
  patientInfoList: PatientInfo[] = [
    {
      "id": 7241,
      "name": "David Daniel",
      "photo": "https://placekitten.com/675/523",
      "dob": "1973-02-03",
      "sex": "Male",
      "mrn": "TGDZ-01026430",
      "hospital": "Kelly-Vang",
      "residence": "894 Brown Meadow\nWest Tinamouth, NM 93038",
      "ssn": "560-05-2585",
      "email": "amanda27@hotmail.com",
      "phone": "(706)487-6849",
      "dept": "envisioneer front-end metrics",
      "physician": "Courtney Johnson",
      "conditions": "User-centric real-time complexity",
      "nextAppointment": "2024-01-19 00:00:00"
    },
    {
      "id": 54683,
      "name": "Amber Baldwin",
      "photo": "https://www.lorempixel.com/462/915",
      "dob": "1943-06-24",
      "sex": "Female",
      "mrn": "ANRT-06216536",
      "hospital": "Cox LLC",
      "residence": "6890 Kim Ramp\nWareview, LA 69152",
      "ssn": "872-92-3161",
      "email": "xallen@schneider-tanner.info",
      "phone": "202-975-3464x483",
      "dept": "evolve impactful interfaces",
      "physician": "Michael Harris",
      "conditions": "Up-sized zero tolerance open system",
      "nextAppointment": "2024-01-27 00:00:00"
    },
    {
      "id": 8358,
      "name": "Amy Johnston MD",
      "photo": "https://placekitten.com/198/807",
      "dob": "1946-01-31",
      "sex": "Male",
      "mrn": "ZTGZ-64060765",
      "hospital": "Duncan PLC",
      "residence": "2973 Bailey Hollow\nMitchellton, TN 72982",
      "ssn": "189-32-6873",
      "email": "ernestjohnson@valdez.com",
      "phone": "630-644-9194x5524",
      "dept": "empower extensible schemas",
      "physician": "Spencer Bruce",
      "conditions": "Reduced non-volatile Local Area Network",
      "nextAppointment": "2024-02-01 00:00:00"
    },
    {
      "id": 78015,
      "name": "Amanda Vazquez",
      "photo": "https://www.lorempixel.com/196/402",
      "dob": "1930-11-14",
      "sex": "Male",
      "mrn": "YOVX-85669249",
      "hospital": "Mcguire, Garcia and Hicks",
      "residence": "007 Nancy Motorway\nLake Christopherburgh, MT 57755",
      "ssn": "233-79-2914",
      "email": "dhawkins@smith.org",
      "phone": "(016)620-7024",
      "dept": "benchmark clicks-and-mortar supply-chains",
      "physician": "Heidi Perry",
      "conditions": "Function-based solution-oriented utilization",
      "nextAppointment": "2024-02-02 00:00:00"
    },
    {
      "id": 74003,
      "name": "Jodi Davis",
      "photo": "https://dummyimage.com/651x139",
      "dob": "1997-02-18",
      "sex": "Other",
      "mrn": "BCQC-63431576",
      "hospital": "Brooks and Sons",
      "residence": "559 Garner Unions\nAmandamouth, CA 24946",
      "ssn": "640-69-8355",
      "email": "mark00@johnson.com",
      "phone": "001-534-521-0980",
      "dept": "target seamless deliverables",
      "physician": "Nichole Hudson",
      "conditions": "Synergistic regional approach",
      "nextAppointment": "2024-02-11 00:00:00"
    },
    {
      "id": 49536,
      "name": "Melanie Hubbard",
      "photo": "https://dummyimage.com/417x67",
      "dob": "1984-12-01",
      "sex": "Other",
      "mrn": "WRRI-58389615",
      "hospital": "Carlson, Berry and Hebert",
      "residence": "730 Duffy Ports\nNew Larryberg, SD 37586",
      "ssn": "710-02-1256",
      "email": "whayes@hotmail.com",
      "phone": "+1-008-345-8128x09482",
      "dept": "monetize strategic e-tailers",
      "physician": "Krista Hood",
      "conditions": "Team-oriented executive encryption",
      "nextAppointment": "2024-02-01 00:00:00"
    },
    {
      "id": 51553,
      "name": "Samuel Riley",
      "photo": "https://placekitten.com/104/395",
      "dob": "1935-05-24",
      "sex": "Other",
      "mrn": "SYHD-71026976",
      "hospital": "Carter-Morrow",
      "residence": "Unit 9821 Box 1981\nDPO AA 34257",
      "ssn": "294-83-0154",
      "email": "richardhaynes@gmail.com",
      "phone": "989.114.6772",
      "dept": "scale e-business solutions",
      "physician": "Mark Cunningham",
      "conditions": "Face-to-face exuding success",
      "nextAppointment": "2024-01-16 00:00:00"
    }
  ];

}
