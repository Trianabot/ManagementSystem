import { Component, OnInit } from '@angular/core';

import {DepartmentService} from '../../core/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers:[DepartmentService]
})
export class DepartmentComponent implements OnInit {

  departmentsData :any =[];
  constructor(public departmentService: DepartmentService) { }

  ngOnInit() {
      this.getDepartments();
  }
  getDepartments(){
    this.departmentService.getDepartments().subscribe(data =>{
      this.departmentsData = data['data'];
      //console.log(this.departmentsData);
   })
  }

}
