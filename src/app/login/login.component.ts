import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


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
	res
  constructor(private auth: AuthService) {
    
  }
  ngOnInit() {

  }
  onSubmit(){
  	this.auth.doLogin(this.form).subscribe(
      data => this.res = data 
    );	
  }

}
