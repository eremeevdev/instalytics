import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router-deprecated';


@Component({
	selector: 'user-add',
	templateUrl: 'app/user-add.template.html'
})
export class UserAddComponent {

	username: string;

	constructor(private api: ApiService) { }

	addUser() {
		this.api.post('/api/insta_users/', { username: this.username })
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
