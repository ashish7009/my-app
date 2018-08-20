import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

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
        $(document).ready(function(){
            var data_to_clipboard = '';
            $(document).on('click','.copy_production',function(){
                $( ".production .production_links" ).each(function( index ) {
                    var link = $(this).text();
                    data_to_clipboard += link+',';
                });
                copyToClipboard(data_to_clipboard);
                data_to_clipboard = '';
            });
            $(document).on('click','.copy_development',function(){
                $( ".development .development_links" ).each(function( index ) {
                    var link = $(this).text();
                    data_to_clipboard += link+',';
                });
                copyToClipboard(data_to_clipboard);
                data_to_clipboard = '';
            });

            function copyToClipboard(text){
                var dummy = document.createElement("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', text);
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            }
        });
    }

    handleData(data){
        this.portfolios_production = data.production_portfolios;
        this.portfolios_development = data.development_portfolios;
    }
  
}

