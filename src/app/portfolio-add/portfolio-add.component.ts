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
		production_url:null,
		development_url:null,
		client:null,
		company:null
	}
	image:File;
	message = null;

  	constructor(private data_service: DataService) {  }

  	ngOnInit() {

  	}

  	onSubmit(){
  		
  		console.log(this.formData);
		this.data_service.addPortfolio(this.image,this.formData).subscribe(
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
			production_url:null,
			development_url:null,
			client:null,
			company:null
		};
	}
	handleError(error){
		this.message = error.error;
	}

	fileUpload(event) {
	    let fileList: FileList = event.target.files;
  	    if(fileList.length > 0) {
	  	    let file: File = fileList[0];
	  	    this.image = file;
  		}
	}

}
