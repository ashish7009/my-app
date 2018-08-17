import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	  users: Object;
    message = null;
  	constructor(private data: DataService) { }
  	ngOnInit() {
  		this.getUsers();
  	}
    deleteUser(userID,name){
      if(confirm("Are you sure to delete "+name)) {
        this.data.deleteUser(userID).subscribe(
            data => console.log(data),
            error => this.handleError(error)
        );
        this.getUsers();
       }
    }
    getUsers(){
      this.data.getUsers().subscribe(
          data => this.users = data,
          error => this.handleError(error)
      );
    }
    handleError(error){
      console.log(error.error);
      this.message = error.error;
    }
}
