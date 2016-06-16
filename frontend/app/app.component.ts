import { Component, DoCheck } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HTTP_PROVIDERS} from '@angular/http';

import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { UserStatComponent } from './user-stat.component';
import { ChangeLogComponent } from './change-log.component';
import { LogoutComponent } from './logout.component';

import { TokenService } from './token.service';
import { ApiService } from './api.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, ApiService, TokenService]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/logout', name: 'Logout', component: LogoutComponent },
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
    { path: '/users/:username/stat', name: 'UserStat', component: UserStatComponent },
    { path: '/users/:username/log', name: 'ChangeLog', component: ChangeLogComponent },
])
export class AppComponent implements DoCheck {

	loggedIn: boolean;

	constructor(private token: TokenService) { }

	ngDoCheck() {
		this.loggedIn = this.token.getToken() ? true : false;	
	}
}
