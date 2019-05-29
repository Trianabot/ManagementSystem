import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Department} from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  selectedDepartment: Department;

  departments: Department[];

  private apiendpoint = environment.apiEndPoint

  constructor(public http:HttpClient) { 
    this.selectedDepartment= new Department();
  }

  //Add Department
  addDepartment(department:Department){
    return this.http.post(this.apiendpoint+"/hr/adddepartment",department);
  }

  //List Departmentts
  getDepartments(){
    return this.http.get(this.apiendpoint+"/hr/department");
  }

  //Update department 
  updateDepartment(obj){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + "/hr/updatedepartment",JSON.stringify(obj),options);
  }

  //Delete Department
  deleteDepartment(obj){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + "/hr/deletedepartment",JSON.stringify(obj),options);
  }

}
