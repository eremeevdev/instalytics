import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from './api.service';
import { InstaUser } from './insta-user';


@Component({
	selector: 'user-add',
	templateUrl: 'app/user-add.template.html'
})
export class UserAddComponent {

	username: string;

	constructor(private api: ApiService) { }

	@Output() onUserAdd = new EventEmitter<InstaUser>();

	addUser() {
		this.api.post('/api/insta_users/', { username: this.username })
			.then((response) => {
				this.username = '';
				this.onUserAdd.emit(response.json());
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
