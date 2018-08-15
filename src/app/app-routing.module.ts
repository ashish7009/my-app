import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
	{
    	path: 'users',
    	component: UsersComponent
  	},
  	{
    	path: 'portfolios',
    	component: PortfoliosComponent
  	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }