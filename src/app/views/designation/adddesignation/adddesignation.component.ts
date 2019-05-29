import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DesignationService} from '../../../core/designation.service';
import {Designation} from '../../../../models/designation.model';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.scss'],
  providers:[DesignationService]
})
export class AdddesignationComponent implements OnInit {

  constructor(public designationService: DesignationService) { }

  ngOnInit() {
  }

  
//add shift 
addDesignation(form: NgForm){
  this.designationService.addDesignation(form.value)
    .subscribe(res =>{
        this.resetForm(form);
    })
}

//reset shift
resetForm(form: NgForm){
if(form){
  form.reset();
  this.designationService.selectedDesignation= new Designation();
}
}
}
