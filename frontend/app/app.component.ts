import {Component} from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HTTP_PROVIDERS} from '@angular/http';

import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { UserStatComponent } from './user-stat.component';

import { TokenService } from './token.service';
import { ApiService } from './api.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Instalytics</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, ApiService, TokenService]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
    { path: '/users/:username/stat', name: 'UserStat', component: UserStatComponent },
])
export class AppComponent { }
