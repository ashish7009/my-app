import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
	roles;
	routes;
	formData= {
		allowed_routes:{}
	};
  userRole = null;

 
  	constructor(private data: DataService,private myRoute: Router) { }

  	ngOnInit() {
  		this.data.getRoles().subscribe(
	    	  data => this.handleData(data)
	  	);
     
  	}
  	handleData(data){
  		this.roles = data.roles;
  		this.routes = data.routes;
          this.roles.forEach( (element) => {
              // element.product_desc = element.product_desc.substring(0,10);
             element.allowed_routes = element.allowed_routes.split(",");
             element.allowed_routes = this.toObject(element.allowed_routes);
             console.log(element);
          });
          

  	}
  	onSubmit(id){
  		var checkedItems = '';
		    $(document).find('button[id='+id+']').parents('form').find('input[type=checkbox]').each(function( index ) {
            if ($(this).is(":checked"))
  			    {	
                      var target = $(this).val();
  			        checkedItems += target+',';  
  			    }
        });
        this.formData.allowed_routes = checkedItems.slice(0,-1);
    		this.data.updatePermission(id,this.formData).subscribe(
  	      	data => this.reloadData(data) 
  	    );  
        
        // this.myRoute.navigate(["users"]);
  	}
    reloadData(data){
      this.ngOnInit();
    }
    roleChange(){
      console.log(this.userRole);
    }
    toObject(arr) {
      var rv = [];
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
      return rv;
    }
   
}

