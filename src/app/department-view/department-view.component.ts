import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  constructor(private hospitalService: HospitalService, private activatedRoute: ActivatedRoute, private router: Router) { }
  departments: any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.departments = this.hospitalService.getDepartments(params['hospital']);
      }
    );
  }
}
