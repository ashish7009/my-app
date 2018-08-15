import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = 'http://localhost:8000/api/';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUzNDMyNDk3NiwiZXhwIjoxNTM0MzI4NTc2LCJuYmYiOjE1MzQzMjQ5NzYsImp0aSI6IjRlMWNIZ0NHY1dmTGNMM3oifQ.11l0sUK9V_beBEY4Z9h3_Z6G0gYtxntM28vYj34E4d4';
  constructor(private http: HttpClient) { }

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



