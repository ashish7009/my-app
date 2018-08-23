import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form = {
		email:null,
		password:null
	};
  token;
  message = null;
  constructor(private auth: AuthService,private myRoute: Router) { }
  ngOnInit() {

  }
  onSubmit(){
  	this.auth.doLogin(this.form).subscribe(
      data => this.saveToken(data),
      error => this.handleError(error)
    );	
    
  }
  saveToken(data){
    localStorage.setItem("LoggedInUser", data.token);
    localStorage.setItem("userRole", data.role);

    this.myRoute.navigate(["portfolios"]);
  }
  handleError(error){
    console.log(error.error);
    this.message = error.error;
  }
}
