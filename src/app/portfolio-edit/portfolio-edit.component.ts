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
		production_url:	null,
		development_url:null,
		client:			null,
		company:		null
	};
	message = null;
	image;
	project = null;
	db = null;
	cred = null;
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
			production_url:	data.production_url,
			development_url:data.development_url,
			client:			data.client,
			company:		data.company
		}
		this.image = 'http://localhost/portfolio/public/images/'+data.image;
		this.project = data.project_backup_file;
		this.db = data.database_backup_file;
		this.cred = data.credential_file;
	}

	handleError(error){
		this.message = error.error;
	}

	sendMessage(data){
		this.message = data.message;
	}

	fileUpload(event,id){
		let fileList: FileList = event.target.files;
  	    if(fileList.length > 0) {
	  	    let file: File = fileList[0];
	  	    this.data.updatePortfolioImage(id,file).subscribe(
		      	data => this.handleImage(data) 
		    );
  		}
	}
	removeImage(id){
		this.data.removePortfolioImage(id).subscribe(
	      	data => this.handleImage(data) 
	    );
	}
	handleImage(data){
		this.message = data.message;
		this.ngOnInit();
	}

	downloadFile(param){
		console.log(param);
		if (param == 'project' && this.project != null) {
			window.open('http://localhost/portfolio/public/projectBackup/'+this.project);
		}
		if (param == 'sql' && this.db != null) {
			window.open('http://localhost/portfolio/public/databaseBackup/'+this.db);
		}
		if (param == 'credential' && this.cred != null) {
			window.open('http://localhost/portfolio/public/credentials/'+this.cred);
		}
	}

	

}