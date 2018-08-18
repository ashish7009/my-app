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
	protfolio = {
		project_name:null,
		description:null,
		tags:null,
		image:null,
		link:null,
		link_type:null,
		client:null,
		company:null
	};
	constructor(private route: ActivatedRoute,private data: DataService) { 
		this.route.params.subscribe( params => this.portfolioId = params.id );
	}

	ngOnInit() {
		this.data.getPortfolio(this.portfolioId).subscribe(
	      	data => this.displayData(data),
      		error => this.handleError(error)
	    );
	}

	onSubmit(id){
	    this.data.updateUser(id,this.protfolio).subscribe(
	      	data => this.sendMessage(data) 
	    );  
	}
	displayData(data){
		console.log(data);
		// this.protfolio = {
		// 	project_name:data.project_name,
		// 	description:data.description,
		// 	tags:data.tags,
		// 	image:data.image,
		// 	link:data.link,
		// 	link_type:data.link_type,
		// 	client:data.client,
		// 	company:data.company
		// }
	}
	handleError(error){

	}
	sendMessage(data){

	}
}
