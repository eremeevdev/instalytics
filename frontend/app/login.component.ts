import {Component} from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login.template.html'
})
export class LoginComponent {

    login: string;
    password: string;

    constructor(private api: ApiService) { }

    doLogin() {
    	// this.loginService.doLogin(this.login, this.password)
    }
}
