import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router-deprecated';


@Component({
	selector: 'logout',
	template: 'Logout...',
})
export class LogoutComponent implements OnInit {

	constructor(private router: Router, private tokenService: TokenService) { }

	ngOnInit() {
		this.tokenService.removeToken();
		this.router.navigate(['Login']);
	}

}
