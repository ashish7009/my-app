import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {
	public formData ={
		project_name:null,
		description:null,
		tags:null,
		image:null,
		production_url:null,
		development_url:null,
		client:null,
		company:null
	}
	message = null;
  	constructor(private data_service: DataService) {  }

  	ngOnInit() {

  	}

  	onSubmit(){
		this.data_service.addPortfolio(this.formData).subscribe(
	  		data => this.sendMessage(data),
	  		error => this.handleError(error)
		);
	}

	sendMessage(data){
		this.message = data.message;
		this.formData = {
			project_name:null,
			description:null,
			tags:null,
			image:null,
			production_url:null,
			development_url:null,
			client:null,
			company:null
		};
	}
	handleError(error){
		this.message = error.error;
	}

}
