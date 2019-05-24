import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiendpoint = environment.apiEndPoint
  constructor(public http:HttpClient) { }
  
  
  login(loginData) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + '/login', JSON.stringify(loginData), options);
  }
}
