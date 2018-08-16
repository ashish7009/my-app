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
		link:null,
		link_type:null,
		client:null,
		company:null
	}
	message = null;
  	constructor(private data_service: DataService) {  }

  	ngOnInit() {

  	}

  	onSubmit(){
		this.data_service.addPortfolio(this.formData).subscribe(
	  		data => this.sendMessage(data) 
		);
	}

	sendMessage(data){
		this.message = data.message;
		this.formData = {
			project_name:null,
			description:null,
			tags:null,
			image:null,
			link:null,
			link_type:null,
			client:null,
			company:null
		};
	}

}
