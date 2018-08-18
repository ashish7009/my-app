import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { PortfolioEditComponent } from './portfolio-edit/portfolio-edit.component';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { PermissionsComponent } from './permissions/permissions.component';


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
      path: 'profile/view',
      component: ProfileViewComponent,
      canActivate: [AuthGuard]
    },
	  {
    	path: 'users',
    	component: UsersComponent,
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
    {
      path: 'portfolios',
      component: PortfoliosComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'portfolio/add',
      component: PortfolioAddComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'portfolio/:id',
      component: PortfolioEditComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'permissions',
      component: PermissionsComponent,
      canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }