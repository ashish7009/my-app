import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { PortfolioEditComponent } from './portfolio-edit/portfolio-edit.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { PermissionsComponent } from './permissions/permissions.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Select2Module } from 'ng2-select2';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    PortfoliosComponent,
    UserEditComponent,
    LoginComponent,
    RegisterComponent,
    UserAddComponent,
    PortfolioAddComponent,
    PortfolioEditComponent,
    ProfileViewComponent,
    PermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
