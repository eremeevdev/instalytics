import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router-deprecated';
import {TokenService} from './token.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login.template.html'
})
export class LoginComponent {

    login: string;
    password: string;

    constructor(private api: ApiService, private router: Router, private token: TokenService) { }

    doLogin() {

		this.api.post('/api/token_auth/', { username: this.login, password: this.password })
			.then((response) => {

				let data = response.json();

				this.token.setToken(data['token']);

				this.router.navigate(['Users']);

			})
			.catch((err) => {
				console.log(err);
			});
    }
}
