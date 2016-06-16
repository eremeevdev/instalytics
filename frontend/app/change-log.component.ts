import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { ApiService } from './api.service';

import { ChangeLog } from './change-log';


@Component({
	selector: 'change-log',
	templateUrl: 'app/change-log.component.html',
})
export class ChangeLogComponent implements OnInit {

	log: ChangeLog[];
	username: String;

	constructor(private api: ApiService, private router: Router,
			    private routeParams: RouteParams) { }

	ngOnInit() {

		this.username = this.routeParams.get('username');

		let url = `/api/insta_users/${this.username}/log`;

		this.api.get(url).then((response) => {
			this.log = response.json();
		}).catch((err) => {
			if (err.status == 401 || err.status == 403) {
				this.router.navigate(['Login']);
			}
		})
	}

}