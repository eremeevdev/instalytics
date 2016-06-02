import {Component} from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login.template.html'
})
export class LoginComponent {

    login: string;
    password: string;

    constructor(private loginService: LoginService) { }

    doLogin() {
    	this.loginService.doLogin(this.login, this.password)
    }
}
