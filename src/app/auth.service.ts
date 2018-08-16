import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	base_url = 'http://localhost:8000/api/';
  constructor(private http:HttpClient, private myRoute:Router) { }

  doLogin(formData){
  	return this.http.post(this.base_url+'auth/login',formData);
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }

  registerUser(formData){
    return this.http.post(this.base_url+'auth/register',formData);
  }
  
}