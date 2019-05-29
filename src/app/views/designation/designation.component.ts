import { Component, OnInit } from '@angular/core';
import {DesignationService} from '../../core/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  designationData: any [];
  constructor(public designationService: DesignationService) { }

  ngOnInit() {
      this.getDesignation();
  }

  getDesignation(){
    this.designationService.getDesignation().subscribe(data =>{
        //console.log(data);
        this.designationData = data['data'];
        //console.log(this.designationData);
    });
  }

}
