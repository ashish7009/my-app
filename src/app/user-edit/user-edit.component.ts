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

  user: Object;

  constructor(private route: ActivatedRoute,private data: DataService) { 
  	this.route.params.subscribe( params => this.user = params.id );
  }

  ngOnInit() {
  	this.data.getUser(this.user).subscribe(
      data => this.user = data 
    );
  }

}
