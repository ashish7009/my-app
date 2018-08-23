import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {
	public formData = {
		project_name:null,
		description:null,
		tags:null,
		production_url:null,
		development_url:null,
		client:null,
		company:null,
		project_backup_desc:null,
		database_backup_desc:null,
		credential_file_desc:null
	}
	image:File = null;
	message = null;
	backupDiv = false;
	projectBackupZip:File = null;
	databaseBackupSql:File = null;
	credentialFileTxt:File = null;
	projectFileError = null;
	dbFileError = null;
	credentialFileError = null;
  	constructor(private data_service: DataService) {  }

  	ngOnInit() {

  	}

  	onSubmit(){
  		console.log(this.formData);
		this.data_service.addPortfolio(this.image,this.projectBackupZip,this.databaseBackupSql,this.credentialFileTxt,this.formData).subscribe(
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
			company:null,
			project_backup_desc:null,
			database_backup_desc:null,
			credential_file_desc:null
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
	  	    console.log(file.type);
  		}
	}
	projectBackup(event){
		let fileList: FileList = event.target.files;
  	    if(fileList.length > 0) {
	  	    let file: File = fileList[0];
	  	    if (file.type == 'application/zip') {
	  	    	console.log('222');
	  	    	this.projectFileError = null;
	  	    	this.projectBackupZip = file;	
	  	    }else{
	  	    	console.log('111');
	  	    	this.projectFileError = "unsupported format";
	  	    }
	  	    
  		}
	}
	databaseBackup(event){
		let fileList: FileList = event.target.files;
  	    if(fileList.length > 0) {
	  	    let file: File = fileList[0];
	  	    if (file.type == 'application/sql') {
	  	    	this.dbFileError = null;
	  	    	this.databaseBackupSql = file;	
	  	    }else{
	  	    	this.dbFileError = "unsupported format";
	  	    }
  		}
	}
	credentialFile(event){
		let fileList: FileList = event.target.files;
  	    if(fileList.length > 0) {
	  	    let file: File = fileList[0];
	  	    if (file.type == 'text/plain') {
	  	    	this.credentialFileError = null;
	  	    	this.credentialFileTxt = file;
	  	    }else{
	  	    	this.credentialFileError = "unsupported format";
	  	    }
  		}
	}
	showBackupField(){
		if (this.backupDiv == false) {
			this.backupDiv = true;
		}else{
			this.backupDiv = false;
		}
	}

}
