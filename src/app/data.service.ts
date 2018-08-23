import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
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
        console.log(formData);
        return this.http.post(this.base_url+'user/update/'+id+'?token='+this.token,formData);
    }

    getUser(userId) {
        return this.http.get(this.base_url+'user/edit/'+userId+'?token='+this.token);
    }

    getPortfolios() {
        return this.http.get(this.base_url+'portfolios?token='+this.token);
    }

    getPortfolio(portfolioId){
        let data = this.http.get(this.base_url+'portfolio/edit/'+portfolioId+'?token='+this.token);
        console.log(data);
        return data;
    }

    addPortfolio(fileItem:File, extraData?:object):any {
        const formData: FormData = new FormData();

        formData.append('fileItem', fileItem, fileItem.name);
        if (extraData) {
            for(let key in extraData){
                // iterate and set other form data
              formData.append(key, extraData[key])
            }
        }
        const req = new HttpRequest('POST', this.base_url+'portfolio/add?token='+this.token, formData, {
            reportProgress: true // for progress data
          });
          return this.http.request(req)
           // return this.http.post(this.base_url+'portfolio/add?token='+this.token,formData);
    }

    updatePortfolio(id,formData){
        return this.http.post(this.base_url+'portfolio/update/'+id+'?token='+this.token,formData);
    }
    
    updatePortfolioImage(id,fileItem:File){
        const formData: FormData = new FormData();
        formData.append('fileItem', fileItem, fileItem.name);
        return this.http.post(this.base_url+'portfolio/update/image'+id+'?token='+this.token,formData);
    }



    getRoles(){
         return this.http.get(this.base_url+'roles?token='+this.token);
    }

     updatePermission(id, data){
         console.log(data);
        return this.http.post(this.base_url+'permission/update/'+id+'?token='+this.token,data);
    }
    

}