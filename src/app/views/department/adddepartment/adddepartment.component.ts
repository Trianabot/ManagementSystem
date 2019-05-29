import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartmentService} from '../../../core/department.service';
import {Department} from '../../../../models/department.model';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.scss'],
  providers:[DepartmentService]
})
export class AdddepartmentComponent implements OnInit {

  constructor(public departmentSerice:DepartmentService) { }

  ngOnInit() {
  }
  
  addDepartment(form: NgForm){
    this.departmentSerice.addDepartment(form.value)
      .subscribe(res =>{
          this.resetForm(form);
      })
  }

resetForm(form: NgForm){
  if(form){
    form.reset();
    this.departmentSerice.selectedDepartment= new Department();
  }
}

}
