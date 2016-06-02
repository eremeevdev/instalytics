import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LoginService } from './login.service';

@Component({
	selector: 'users',
    template: `
        <h1>Users Component</h1>
    `
})
export class UsersComponent implements OnInit {

	constructor(private loginService: LoginService, private router: Router) { }

	ngOnInit() {
		if(this.loginService.getToken().length == 0) {
			this.router.navigate(['Login']);
		}
	}

}
