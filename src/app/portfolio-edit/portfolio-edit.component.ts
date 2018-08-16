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

	portfolio: Object;

	constructor(private route: ActivatedRoute,private data: DataService) { 
		this.route.params.subscribe( params => this.portfolio = params.id );
	}

	ngOnInit() {
		this.data.getPortfolio(this.portfolio).subscribe(
	      	data => this.portfolio = data 
	    );
	}

}
