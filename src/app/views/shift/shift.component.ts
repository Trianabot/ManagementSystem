import { Component, OnInit } from '@angular/core';
import {ShiftService} from '../../core/shift.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  providers: [ShiftService]
})
export class ShiftComponent implements OnInit {

  shiftsData: any = [];
  constructor(public shiftService: ShiftService) { }

  ngOnInit() {
      this.getShifts();
  }

  getShifts(){
    this.shiftService.getShifts().subscribe(data =>{
        //console.log(data);
        this.shiftsData = data['data'];
    });
  }

}
