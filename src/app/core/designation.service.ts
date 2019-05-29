import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Designation} from '../../models/designation.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  selectedDesignation: Designation;

   designations: Designation[];
  

  private apiendpoint = environment.apiEndPoint


  constructor(public http:HttpClient) { 
    this.selectedDesignation= new Designation();
  }

  addDesignation(designation:Designation){
    return this.http.post(this.apiendpoint+"/hr/adddesignation",designation);
  }

  
    //List Desingation
    getDesignation(){
      return this.http.get(this.apiendpoint+"/hr/designation");
    }
  

}
