import {Component} from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HTTP_PROVIDERS} from '@angular/http';

import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';

import { LoginService } from './login.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Instalytics</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, LoginService]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
])
export class AppComponent { }
