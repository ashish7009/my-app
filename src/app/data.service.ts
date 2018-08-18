import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    base_url = 'http://localhost/portfolio/public/index.php/api/';
    // base_url = 'http://45.248.162.61/portfolio/public/index.php/api/';

    token = this.auth.getToken();

    constructor(private http: HttpClient, private auth: AuthService) { }

    getUsers() {
        return this.http.get(this.base_url+'users?token='+this.token);
    }

    getCurrentUser() {
        return this.http.get(this.base_url+'user?token='+this.token);
    }

    addUser(formData) {
       return this.http.post(this.base_url+'user/add?token='+this.token,formData);
    }

    deleteUser(id) {
       return this.http.get(this.base_url+'user/delete/'+id+'?token='+this.token);
    }

    updateUser(id,formData){
        return this.http.post(this.base_url+'user/update/'+id+'?token='+this.token,formData);
    }

    getUser(userId) {
        return this.http.get(this.base_url+'user/edit/'+userId+'?token='+this.token);
    }

    getPortfolios() {
        return this.http.get(this.base_url+'portfolios?token='+this.token);
    }

    getPortfolio(portfolioId){
        return this.http.get(this.base_url+'portfolio/edit/'+portfolioId+'?token='+this.token);
    }

    addPortfolio(formData) {
       return this.http.post(this.base_url+'portfolio/add?token='+this.token,formData);
    }

    updatePortfolio(id,formData){
        return this.http.post(this.base_url+'portfolio/update/'+id+'?token='+this.token,formData);
    }

}