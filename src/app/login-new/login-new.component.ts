import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service' 

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent implements OnInit {
  userName:any;
  password:any;
  loginForm: FormGroup;
  constructor(public router: Router,private formBuilder:FormBuilder,public http: HttpClient,public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onLoggedin() {
    let loginData ={
        userName : this.loginForm.value.userName,
        password:this.loginForm.value.password,
        }
        console.log(loginData)
        if(this.loginForm.value.userName =="" || this.loginForm.value ==""){
          alert("Please enter user name and password")
        }
        else if(this.loginForm.value.userName !="" || this.loginForm.value !=""){
        this.authService.login(loginData).subscribe(data =>{
        console.log(data);
        //  this.router.navigate(['/signup'])
      
       this.router.navigate(['/demo'])
          })
        }
        else {
         alert("wrong Credentials");
        
         }
}
}
