import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../core/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers:[DepartmentService]
})
export class DepartmentComponent implements OnInit {

  departmentsData: any = [];
  deptData: any = [];
  showDepartment: Boolean = false;
  deptId: any;
  getdeptName: any =[];
  getdeptContact: any =[];
  getdeptEmail: any =[];
  getdeptPhone: any =[];
  constructor(public departmentService: DepartmentService) { }

  ngOnInit() {
      this.getDepartments();
  }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(data =>{
      this.departmentsData = data['data'];
   })
  };

  //get department by id
  getDepartment(obj){
    this.showDepartment = this.showDepartment ? false : true;
      this.deptData = obj;
      this.deptId = this.deptData.deptId;
      this.getdeptName = this.deptData.departmentName;
      this.getdeptContact = this.deptData.contactPerson;
      this.getdeptEmail = this.deptData.email;
      this.getdeptPhone = this.deptData.phone
  }

  //update Department 
  updateDepartment(data){
      let obj ={
        deptId: this.deptId,
        departmentName: data['departmentName'],
        contactPerson: data['contactPerson'],
        phone : data['phone'],
        email : data['email']
      };
      this.departmentService.updateDepartment(obj).subscribe(Response=>{
        if(Response){
          this.getDepartments();
        }
    },err=>{
    console.log(err);
    });
  }

  //Delete Department
  deleteDepartment(data){
      let obj = {
          deptId: data.deptId
      };
      this.departmentService.deleteDepartment(obj).subscribe(Response =>{
          console.log(Response);
      });
  };

}
