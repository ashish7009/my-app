import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
	return this.http.get('http://localhost:8000/api/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUzNDMyMDAzOCwiZXhwIjoxNTM0MzIzNjM4LCJuYmYiOjE1MzQzMjAwMzgsImp0aSI6Im5LbzdsTTRPUEN6bnFrRGoifQ.iIX69ypxquPepxU8nWUyJVg1le34xo2RqQiURPpNWPQ')
  }
}



