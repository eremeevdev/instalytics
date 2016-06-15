"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var login_component_1 = require('./login.component');
var users_component_1 = require('./users.component');
var user_stat_component_1 = require('./user-stat.component');
var logout_component_1 = require('./logout.component');
var token_service_1 = require('./token.service');
var api_service_1 = require('./api.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, api_service_1.ApiService, token_service_1.TokenService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
            { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },
            { path: '/users', name: 'Users', component: users_component_1.UsersComponent, useAsDefault: true },
            { path: '/users/:username/stat', name: 'UserStat', component: user_stat_component_1.UserStatComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map