import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Shift} from '../../models/shift.model';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  selectedShift: Shift;

   shifts: Shift[];
  

  private apiendpoint = environment.apiEndPoint

  constructor(public http:HttpClient) { 
    this.selectedShift= new Shift();
  }

  //Add Department
  addShift(shift:Shift){
    return this.http.post(this.apiendpoint+"/hr/addshiftTime",shift);
  }

    //List Departmentts
  getShifts(){
      return this.http.get(this.apiendpoint+"/hr/shifttime");
    }
  



}

