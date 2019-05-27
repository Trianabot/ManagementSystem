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
  username:any;
  password:any;
  loginForm: FormGroup;
  userdata:any;
  constructor(public router: Router,private formBuilder:FormBuilder,public http: HttpClient,public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onLoggedin() {
    let loginData ={
        username : this.loginForm.value.username,
        password:this.loginForm.value.password,
        }
        if(this.loginForm.value.username =="" || this.loginForm.value ==""){
          alert("Please enter user name and password")
        }
        else if(this.loginForm.value.username !="" || this.loginForm.value !=""){
        this.authService.login(loginData).subscribe(data =>{
              this.userdata = data['user'].role;
              localStorage.setItem('role',this.userdata);
              this.router.navigate(['/dashboard'])
          })
        }
        else {
         alert("wrong Credentials");
        
         }
}
}
