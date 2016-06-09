import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

@Component({
    selector: 'users',
    template: '<h1>Users Component</h1>'
})
export class UsersComponent implements OnInit {

    constructor(private api: ApiService, private token: TokenService, private router: Router) { }

    ngOnInit() {

        this.api.get('/api/insta_users/')
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                if(err.status == 401) {
                    this.router.navigate(['Login']);
                }
            });
    }

}
