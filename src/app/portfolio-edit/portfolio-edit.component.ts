import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.css']
})
export class PortfolioEditComponent implements OnInit {

	portfolioId: Object;
	portfolio = {
		id:				null,
		project_name:	null,
		description:	null,
		tags:			null,
		image:			null,
		production_url:	null,
		development_url:null,
		client:			null,
		company:		null
	};
	message = null;

	constructor(private route: ActivatedRoute,private data: DataService) { 
		this.route.params.subscribe( 
			params => this.portfolioId = params.id 
		);
	}

	ngOnInit() {
		this.data.getPortfolio(this.portfolioId).subscribe(
	      	data => this.displayData(data),
      		error => this.handleError(error)
	    );
	}

	onSubmit(id){
	    this.data.updatePortfolio(id,this.portfolio).subscribe(
	      	data => this.sendMessage(data) 
	    );  
	}

	displayData(data){
		this.portfolio = {
			id:				data.id,
			project_name:	data.project_name,
			description:	data.description,
			tags:			data.tags,
			image:			data.image,
			production_url:	data.production_url,
			development_url:data.development_url,
			client:			data.client,
			company:		data.company
		}
	}

	handleError(error){
		this.message = error.error;
	}

	sendMessage(data){
		this.message = data.message;
	}

}
