import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ShiftService} from '../../../core/shift.service';
import {Shift} from '../../../../models/shift.model';

@Component({
  selector: 'app-addshift',
  templateUrl: './addshift.component.html',
  styleUrls: ['./addshift.component.scss'],
  providers:[ShiftService]
})
export class AddshiftComponent implements OnInit {

  constructor(public shiftService:ShiftService) { }

  ngOnInit() {
  }

//add shift 
addShift(form: NgForm){
    this.shiftService.addShift(form.value)
      .subscribe(res =>{
          this.resetForm(form);
      })
}

//reset shift
resetForm(form: NgForm){
  if(form){
    form.reset();
    this.shiftService.selectedShift= new Shift();
  }
}



}
