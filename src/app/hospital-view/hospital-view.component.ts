import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css']
})
export class HospitalViewComponent implements OnInit {

  hospitals: { hospitalname: string; contactnumber: string; }[];
  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit() {
    this.hospitals = this.hospitalService.getHospitals();
  }
  viewHospital(hospitalName: string) {
    this.router.navigate(['/department'], { queryParams: { hospital: hospitalName } });
  }

  sortHospital() {
    this.hospitals = this.hospitals.sort((a, b) => {
      return a.hospitalname >= b.hospitalname ? 1 : -1;
    })
  }

}
