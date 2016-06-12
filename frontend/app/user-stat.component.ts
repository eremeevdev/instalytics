import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { ApiService } from './api.service';
import { Stat } from './stat';

@Component ({
	selector: 'user-stat',
	templateUrl: 'app/user-stat.component.html',
})
export class UserStatComponent implements OnInit {

	statList: Stat[];
	username: String;

	constructor(private api: ApiService, private router: Router,
				private routeParams: RouteParams) { }

	ngOnInit() {
		this.username = this.routeParams.get('username');
		this.api.get(`/api/insta_users/${this.username}/stat`)
			.then((response) => {
				this.statList = response.json();
				console.log(this.statList);
			})
			.catch((err) => {
                console.log(err);
                if (err.status == 401) {
                    this.router.navigate(['Login']);
                }
			});
	}

}
