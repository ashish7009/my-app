import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public form = {
		name:null,
		email:null,
		password:null,
    permission:null
	};
	message = null;
  constructor(private auth: AuthService) {
  	
  }

  ngOnInit() {
  }
  onSubmit(){

  	this.auth.registerUser(this.form).subscribe(
      data => this.sendMessage(data) 
    );	
  }
  sendMessage(data){
  	this.message = data.message;
    this.form = {
      name:null,
      email:null,
      password:null,
      permission:null
    };
  }

}
