import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
	currentUser: Object;
	public form = {
		name:null,
		email:null
	};
	constructor(private data: DataService) {

	}

	ngOnInit() {
		this.data.getCurrentUser().subscribe(
		    data => this.display(data)
		);
	}
	display(data){
		console.log(data.result);
		this.form = {
			name:data.result.name,
			email:data.result.email
		};
	}
}
