import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

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
      path: '',
      component: PortfoliosComponent,
      canActivate: [AuthGuard]
    },
	  {
    	path: 'users',
    	component: UsersComponent,
      canActivate: [AuthGuard]
  	},
  	{
    	path: 'portfolios',
    	component: PortfoliosComponent,
      canActivate: [AuthGuard]
  	},
    {
      path: 'user/add',
      component: UserAddComponent,
      canActivate: [AuthGuard]
    },
  	{
	    path: 'user/:id',
	    component: UserEditComponent,
      canActivate: [AuthGuard]
	  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }