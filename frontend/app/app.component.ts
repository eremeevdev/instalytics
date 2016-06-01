import {Component} from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Instalytics</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
])
export class AppComponent { }
