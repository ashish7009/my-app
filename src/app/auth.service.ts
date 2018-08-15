import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	base_url = 'http://localhost:8000/api/';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUzNDMyNDk3NiwiZXhwIjoxNTM0MzI4NTc2LCJuYmYiOjE1MzQzMjQ5NzYsImp0aSI6IjRlMWNIZ0NHY1dmTGNMM3oifQ.11l0sUK9V_beBEY4Z9h3_Z6G0gYtxntM28vYj34E4d4';
  constructor(private http:HttpClient) { }

  doLogin(formData){
  	return this.http.post(this.base_url+'auth/login',formData).subscribe(
  		data => console.log(data),
  		error => console.log(error)
  	);	
  }
  
}
