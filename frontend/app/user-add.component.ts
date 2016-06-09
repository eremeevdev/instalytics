import { Component } from '@angular/core';
import { ApiService } from './api.service';


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
				this.username = '';
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
