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

}
