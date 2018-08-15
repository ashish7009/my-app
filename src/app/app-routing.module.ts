import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{
    	path: 'login',
    	component: LoginComponent
  	},
	{
    	path: 'register',
    	component: RegisterComponent
  	},
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