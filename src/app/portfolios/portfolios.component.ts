import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getPortfolios().subscribe(
     	data => this.portfolios = data 
    );
  }

}
