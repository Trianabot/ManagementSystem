import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
//import {Shift} from '../../models/shift.model';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  selectedEmployee: Employee;

   employees: Employee[];
  

  private apiendpoint = environment.apiEndPoint

  constructor(public http:HttpClient) { 
    this.selectedEmployee= new Employee();
  }

  //Add Department
  addEmployee(employee:Employee){
    return this.http.post(this.apiendpoint+"/hr/addemployee",employee);
  }

    //List Departmentts
  getShifts(){
      return this.http.get(this.apiendpoint+"/hr/shifttime");
    }
}
