import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
	roles:Object;
	routes:Object;
	formData= {
		allowed_routes:null
	};
  	constructor(private data: DataService) { }

  	ngOnInit() {
  		this.data.getRoles().subscribe(
	    	  data => this.handleData(data)
	  	);
  	}
  	handleData(data){
  		this.roles = data.roles;
  		this.routes = data.routes;
  	}
  	onSubmit(id){
  		var checkedItems = '';
		$(document).find('button[id='+id+']').parents('form').find('input[type=checkbox]').each(function( index ) {
            if ($(this).is(":checked"))
			{	var target = $(this).val();
				checkedItems += target+',';  
			}
        });
        this.formData.allowed_routes = checkedItems.slice(0,-1);
  		this.data.updatePermission(id,this.formData).subscribe(
	      	data => console.log(data) 
	    );  
  	}
}

