import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DesignationService} from '../../../core/designation.service';
import {ShiftService} from '../../../core/shift.service';
import {EmployeeService } from '../../../core/employee.service';
import {Employee} from '../../../../models/employee.model';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  designationData: any [];
  shiftsData: any [];
  constructor(public designationService: DesignationService, public employeeService: EmployeeService, public shiftService:ShiftService) { }

  ngOnInit() {
      this.getDesignation();
      this.getShift();
  }

  //designation List
  getDesignation(){
    this.designationService.getDesignation().subscribe(data =>{
        this.designationData = data['data'];
        //console.log(this.designationData);
    });
  }

  //Shift List
  getShift(){
    this.shiftService.getShifts().subscribe(data =>{
          //console.log(data);
          this.shiftsData = data['data'];
    });
  }
  addEmployee(form: NgForm){
    this.employeeService.addEmployee(form.value)
      .subscribe(res =>{
          this.resetForm(form);
      })
  }

resetForm(form: NgForm){
  if(form){
    form.reset();
    this.employeeService.selectedEmployee= new Employee();
  }
}


}
