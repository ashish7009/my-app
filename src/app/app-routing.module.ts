import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
	{
    	path: 'users',
    	component: UsersComponent
  	},
  	{
    	path: 'portfolios',
    	component: PortfoliosComponent
  	},
  	{
	    path: 'user/:id',
	    component: UserEditComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }