import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = 'http://localhost:8000/api/';
  token = this.auth.getToken();
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers() {
	return this.http.get(this.base_url+'users?token='+this.token);
  }

  getUser(userId) {
    return this.http.get(this.base_url+'user/edit/'+userId+'?token='+this.token);
  }

  getPortfolios() {
	return this.http.get(this.base_url+'portfolios?token='+this.token);
  }
  
}