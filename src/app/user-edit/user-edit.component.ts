import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId: Object;
  user= {
    id:null,
    name:null,
    email:null,
    permission:null
  };
  message = null;
  constructor(private route: ActivatedRoute,private data: DataService) { 
  	this.route.params.subscribe( params => this.userId = params.id );
  }

  ngOnInit() {
  	this.data.getUser(this.userId).subscribe(
      data => this.displayData(data),
      error => this.handleError(error)
    );
  }

  onSubmit(id){
    this.data.updateUser(id,this.user).subscribe(
      data => this.sendMessage(data) 
    );  
  }

  handleError(error){
    this.message = error.error;
  }

  displayData(data){
    console.log(data);
    this.user= {
      id:data.id,
      name:data.name,
      email:data.email,
      permission:data.permission
    };
  }

  sendMessage(data){
    console.log(data);
    this.message = data.message;
  }
}
