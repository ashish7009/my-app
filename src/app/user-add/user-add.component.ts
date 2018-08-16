import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

	public form = {
		name:null,
		email:null,
		password:null
	};

	message = null;
	
  	constructor(private data_service: DataService) { }

	ngOnInit() {
	
	}

	onSubmit(){
		this.data_service.addUser(this.form).subscribe(
	  		data => this.sendMessage(data) 
		);
	}

	sendMessage(data){
		this.message = data.message;
		this.form = {
			name:null,
			email:null,
			password:null
		};
	}

}
