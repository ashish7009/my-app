import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios_production: Object;
  portfolios_development: Object;
  textToCopy = null;
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getPortfolios().subscribe(
     	data => this.handleData(data) 
    );
  }

  handleData(data){
    this.portfolios_production = data.production_portfolios;
    this.portfolios_development = data.development_portfolios;
  }
  

  copyMessage(id){
    this.textToCopy = document.getElementById(id);
    console.log(this.textToCopy);
    }
}
